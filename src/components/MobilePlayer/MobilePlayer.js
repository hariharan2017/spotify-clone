import { useDispatch, useSelector } from "react-redux";
import { actions as dataActions } from "../../store/data";
import { MdExpandMore, MdMoreHoriz, MdShuffle, MdSkipPrevious, MdPauseCircleOutline, MdPlayCircleOutline, MdSkipNext, MdOutlineRepeat, MdOutlineVolumeUp, MdOutlineVolumeOff } from "react-icons/md";
import { smallFont, medFont, bigFont, iconColor } from "../../constants/css";
import ProgressBar from "../ProgressBar";
import classNames from "classnames";
import styles from "./MobilePlayer.module.scss";

const MobilePlayer = ({ audio, playSong, pauseSong, prevSong, nextSong, onMuteClick, onUnmuteClick, onVolumeChange, muted, volume, currTime, duration }) => {
  const dispatch = useDispatch();
  const songData = useSelector(state => state.data.song);
  const player = useSelector(state => state.data.player);
  const selectedAlbum = useSelector(state => state.data.album.selectedAlbum);
  const selectedPlaylist = useSelector(state => state.data.userPlaylists.selectedPlaylist);

  const handleMobilePlayerClose = (event) => {
    event.stopPropagation();
    dispatch(dataActions.closeMobilePlayer());
  };

  return (
    <>
      {player.showMobilePlayer &&
      <div className={classNames(styles["mobile-player-container"], player.showMobilePlayer ? "" : styles["player_closing"])}>
        <div className={styles["header"]}>
          <MdExpandMore fontSize={bigFont} onClick={handleMobilePlayerClose} />
          <div>{selectedPlaylist?.name}</div>
          <MdMoreHoriz fontSize={bigFont} />
        </div>
        <img className={styles["image"]} src={songData?.song?.track?.album?.images?.[2]?.url || selectedAlbum?.images?.[0]?.url} alt={songData?.song?.track?.name || songData?.song?.name} />
        <div className={styles["song-details"]}>
          <div className={styles["title"]}>{songData?.song?.track?.name || songData?.song?.name}</div>
          <div className={styles["artist"]}>{songData?.song?.track?.album?.artists?.[0]?.name || songData?.song?.artists?.[0]?.name}</div>
        </div>
        <ProgressBar className={styles["progress"]} backgroundColor={"white"} completed={currTime*1000} duration={duration} mobile={true}/>
        <div className={styles["icons-container"]}>
          <MdShuffle fontSize={smallFont} color={iconColor}  />
          <MdSkipPrevious className={styles["player-prev"]} fontSize={medFont} color={iconColor} onClick={prevSong} />
          {player.isPlaying ? <MdPauseCircleOutline onClick={pauseSong} fontSize={bigFont} /> : <MdPlayCircleOutline onClick={playSong} fontSize={bigFont}/> }
          <MdSkipNext className={styles["player-next"]} fontSize={medFont} color={iconColor} onClick={nextSong} />
          <MdOutlineRepeat fontSize={smallFont} color={iconColor}  />
        </div>
        {/* <div className={styles["volume-controls"]}>
          {!muted ? <MdOutlineVolumeUp onClick={onMuteClick} /> : <MdOutlineVolumeOff onClick={onUnmuteClick} />}
          <input className={styles["slider"]} type={"range"} value={volume} onChange={onVolumeChange}/>
        </div> */}
      </div>}
    </>
  );
};

export default MobilePlayer;
