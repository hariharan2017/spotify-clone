import { useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { actions as dataActions } from "../../store/data";
import SongBanner from "../../components/SongBanner";
import SongRow from "../../components/SongRow";
import LoadingSkeleton from "../../components/LoadingSkeleton";
import styles from "./Playlist.module.scss";

const Playlist = () => {
  const dispatch = useDispatch();
  const { playlistId } = useParams();

  const selectedPlaylist = useSelector(state => state.data.userPlaylists.selectedPlaylist);
  const common = useSelector(state => state.common);

  useEffect(() => {
    dispatch(dataActions.getPlaylistData(playlistId));
  }, [playlistId])

  const calculateDuration = (selectedPlaylist) => {
    let totalTime = 0;
    selectedPlaylist?.tracks?.items?.forEach((item) => {
      totalTime += item?.track?.duration_ms || 0;
    });
    return totalTime;
  };

  const duration = useMemo(() => calculateDuration(selectedPlaylist), [selectedPlaylist]);

  const bannerProps = {
    type: selectedPlaylist?.type,
    name: selectedPlaylist?.name,
    description: selectedPlaylist?.description,
    owner: selectedPlaylist?.owner?.display_name,
    followers: selectedPlaylist?.followers?.total?.toLocaleString('en-US') + " likes",
    totalTracks: selectedPlaylist?.tracks?.total + " songs",
    image: selectedPlaylist?.images?.[0]?.url,
    duration
  }

  return (
    <div className={styles["playlist-container"]}>
      <SongBanner {...bannerProps} />
      <div className={styles["songs-container"]}>
        <div className={styles["table-header-container"]}>
          <div className={styles["table-header"]}>#</div>
          <div className={styles["table-header"]}>Title</div>
          <div className={styles["table-header"]}>Album</div>
          <div className={styles["table-header"]}>Date Added</div>
          <div className={styles["table-header"]}>Duration</div>
        </div>
        {common.loading && <LoadingSkeleton type={"row"}/>}
        {selectedPlaylist?.tracks?.items?.map?.((song, index) => {
          return <SongRow key={song?.track?.uri} song={song} index={index} />
        })}
      </div>
    </div>
  )
}

export default Playlist;