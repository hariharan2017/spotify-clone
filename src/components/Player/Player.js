import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { MdFavorite, MdShuffle, MdSkipPrevious, MdOutlinePlayCircle, MdSkipNext, MdOutlineRepeat, MdOutlineVolumeUp, MdOutlineVolumeOff, MdOutlineClose } from "react-icons/md";
import { actions as dataActions } from "../../store/data";
import styles from "./Player.module.scss";

const Player = () => {
  const dispatch = useDispatch();
  const songData = useSelector(state => state.data.song);

  const audioRef = useRef(null)
  
  useEffect(() => {
    if(audioRef.current && songData?.song?.track?.["preview_url"]) {
      audioRef.current.pause();
      audioRef.current = new Audio(songData?.song?.track?.["preview_url"]);
      audioRef.current.play();
    } else {
      audioRef.current = new Audio(songData?.song?.track?.["preview_url"]);
      audioRef.current.play();
    }

    return () => {
      if(audioRef.current) {
        audioRef.current.pause();
      }
    }
  }, [songData]);

  const handleClose = () => {
    dispatch(dataActions.closePlayer());
  }

  return (
    <div className={styles["player-container"]}>
      <div className={styles["player-song-details"]}>
        <img className={styles["song-image"]} src={songData?.song?.track?.album?.images?.[2]?.url} />
        <div className={styles["song-text"]}>
          <div className={styles["song-title"]}>{songData?.song?.track?.name}</div>
          <div className={styles["song-artist"]}>{songData?.song?.track?.album?.artists?.[0]?.name}</div>
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
        <MdOutlineClose onClick={handleClose}/>
      </div>
    </div>
  );
};

export default Player;