import { useSelector } from "react-redux";
import { MdFavorite, MdShuffle, MdSkipPrevious, MdOutlinePlayCircle, MdSkipNext, MdOutlineRepeat, MdOutlineVolumeUp, MdOutlineVolumeOff, MdOutlineClose } from "react-icons/md";
import styles from "./Player.module.scss";

const Player = () => {
  const songData = useSelector(state => state.data.song);

  return (
    <div className={styles["player-container"]}>
      <div className={styles["player-song-details"]}>
        <img className={styles["song-image"]} src={"https://i.scdn.co/image/ab67616d0000485166371d0ad05c3f402d9cb2ae"} />
        <div className={styles["song-text"]}>
          <div className={styles["song-title"]}>Fallen</div>
          <div className={styles["song-artist"]}>Egoist</div>
        </div>
        <MdFavorite />
      </div>
      <div className={styles["player-controls"]}>
        <div>
          <MdShuffle />
          <MdSkipPrevious />
          <MdOutlinePlayCircle />
          <MdSkipNext />
          <MdOutlineRepeat />
        </div>
        <div>
          Progress Bar
        </div>
      </div>
      <div className={styles["volume-controls"]}>
        <MdOutlineVolumeUp />
        <MdOutlineClose />
      </div>
    </div>
  );
};

export default Player;
