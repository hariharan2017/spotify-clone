import { useDispatch, useSelector } from "react-redux"
import { showMinSecsDuration } from "../../helpers/methods";
import { actions as dataActions } from "../../store/data";
import { ALBUM_SONG } from "../../constants/constants";
import classNames from "classnames";
import styles from "./AlbumRow.module.scss";

const AlbumRow = ({ song, index }) => {
  const dispatch = useDispatch();

  const songData = useSelector(state => state.data.song);
  const selectedAlbum = useSelector(state => state.data.album.selectedAlbum);

  const handleRowClick = () => {
    dispatch(dataActions.selectSong(song?.uri, song?.["preview_url"], song, selectedAlbum, ALBUM_SONG));
  }

  return (
    <div className={classNames(styles["song-row-container"], songData.currentSong == song?.uri ? styles["selected"] : null)} onClick={handleRowClick}>
      <div className={styles["song-number"]}>{index + 1}</div>
      <div className={styles["song-details"]}>
        <div className={styles["song-text"]}>
          <div className={styles["song-title"]}>{song?.name}</div>
          <div className={styles["song-artist"]}>{song?.artists?.[0]?.name}</div>
        </div>
      </div>
      <div className={styles["song-duration"]}>{showMinSecsDuration(song?.["duration_ms"])}</div>
    </div>
  );
};

export default AlbumRow;
