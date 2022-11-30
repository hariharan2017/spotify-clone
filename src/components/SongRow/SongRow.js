import { getDaysAgo, showDisplayDuration } from "../../helpers/methods";
import styles from "./SongRow.module.scss";

const SongRow = ({ song, index }) => {
  return (
    <div className={styles["song-row-container"]}>
      <div className={styles["song-number"]}>{index + 1}</div>
      <div className={styles["song-details"]}>
        <div className={styles["song-image"]}>
          <img src={song?.track?.album?.images?.[2]?.url} />
        </div>
        <div className={styles["song-text"]}>
          <div className={styles["song-title"]}>{song?.track?.name}</div>
          <div className={styles["song-artist"]}>{song?.track?.artists?.[0]?.name}</div>
        </div>
      </div>
      <div className={styles["song-album"]}>{song?.track?.album?.name}</div>
      <div className={styles["song-date-added"]}>{getDaysAgo(song?.["added_at"])}</div>
      <div className={styles["song-duration"]}>{showDisplayDuration(song?.track?.["duration_ms"])}</div>
    </div>
  );
};

export default SongRow;
