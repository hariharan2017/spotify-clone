import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import SongRow from "../../components/SongRow/SongRow";
import { actions as dataActions } from "../../store/data";
import styles from "./Playlist.module.scss";

const Playlist = () => {
  const dispatch = useDispatch();
  const { playlistId } = useParams();

  const selectedPlaylist = useSelector(state => state.data.userPlaylists.selectedPlaylist);

  useEffect(() => {
    dispatch(dataActions.getPlaylistData(playlistId));
  }, [playlistId])

  return (
    <div className={styles["playlist-container"]}>
      <div className={styles["banner-container"]}>
        <div className={styles["image-container"]}>
          <img className={styles["playlist-banner-image"]} src={selectedPlaylist?.images?.[0]?.url} alt={selectedPlaylist?.name}/>
        </div>
        <div className={styles["banner-text-container"]}>
          <div className={styles["banner-text-type"]}>{selectedPlaylist?.type}</div>
          <div className={styles["banner-text-title"]}>{selectedPlaylist?.name}</div>
          <div className={styles["banner-text-desc"]}>{selectedPlaylist?.description}</div>
          <div className={styles["banner-footer-container"]}>
            <div className={styles["banner-footer-owner"]}>{selectedPlaylist?.owner?.["display_name"]}</div>
            <div className={styles["banner-footer-spacer"]}>.</div>
            <div className={styles["banner-footer-likes"]}>{selectedPlaylist?.followers?.total} likes</div>
            <div className={styles["banner-footer-spacer"]}>.</div>
            <div className={styles["banner-footer-songs"]}>{selectedPlaylist?.tracks?.total} songs</div>
            <div className={styles["banner-footer-spacer"]}>.</div>
            <div className={styles["banner-footer-duration"]}></div>
          </div>
        </div>
      </div>
      <div className={styles["songs-container"]}>
        <div className={styles["table-header-container"]}>
          <div className={styles["table-header"]}>#</div>
          <div className={styles["table-header"]}>Title</div>
          <div className={styles["table-header"]}>Album</div>
          <div className={styles["table-header"]}>Date Added</div>
          <div className={styles["table-header"]}>Duration</div>
        </div>
        {selectedPlaylist?.tracks?.items?.map?.((song, index) => {
          return <SongRow key={song?.track?.uri} song={song} index={index} />
        })}
      </div>
    </div>
  )
}

export default Playlist;