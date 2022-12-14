import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom";
import { getDaysAgo, getUri, showMinSecsDuration } from "../../helpers/methods";
import { actions as dataActions } from "../../store/data";
import { PLAYLIST_SONG } from "../../constants/constants";
import classNames from "classnames";
import styles from "./SongRow.module.scss";

const SongRow = ({ song, index }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const songData = useSelector(state => state.data.song);
  const selectedPlaylist = useSelector(state => state.data.userPlaylists.selectedPlaylist);

  const handleRowClick = () => {
    dispatch(dataActions.selectSong(song?.track?.uri, song?.track?.["preview.url"], song, selectedPlaylist, PLAYLIST_SONG));
  }

  const handleAlbumClick = (event) => {
    event.stopPropagation();
    navigate(`/album/${getUri(song?.track?.album?.uri)}`);
  }

  return (
    <div className={classNames(styles["song-row-container"], songData.currentSong == song?.track?.uri ? styles["selected"] : null)} onClick={handleRowClick}>
      <div className={styles["song-number"]}>{index + 1}</div>
      <div className={styles["song-details"]}>
        <img className={styles["song-image"]} src={song?.track?.album?.images?.[2]?.url} alt={song?.track?.name} />
        <div className={styles["song-text"]}>
          <div className={styles["song-title"]}>{song?.track?.name}</div>
          <div className={styles["song-artist"]}>{song?.track?.artists?.[0]?.name}</div>
        </div>
      </div>
      <div className={styles["song-album"]} onClick={handleAlbumClick}>{song?.track?.album?.name}</div>
      <div className={styles["song-date-added"]}>{getDaysAgo(song?.["added_at"])}</div>
      <div className={styles["song-duration"]}>{showMinSecsDuration(song?.track?.["duration_ms"])}</div>
    </div>
  );
};

export default SongRow;
