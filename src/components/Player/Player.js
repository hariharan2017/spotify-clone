import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { MdFavorite, MdShuffle, MdSkipPrevious, MdPlayCircleOutline, MdSkipNext, MdOutlineRepeat, MdOutlineVolumeUp, MdOutlineVolumeOff, MdOutlineClose, MdPauseCircleOutline } from "react-icons/md";
import { actions as dataActions } from "../../store/data";
import { medFont, bigFont, iconColor } from "../../constants/css";
import ProgressBar from "../ProgressBar";
import MobilePlayer from "../MobilePlayer";
import styles from "./Player.module.scss";

const Player = () => {
  const dispatch = useDispatch();
  const songData = useSelector(state => state.data.song);
  const player = useSelector(state => state.data.player);
  const selectedAlbum = useSelector(state => state.data.album.selectedAlbum);
  const selectedPlaylist = useSelector(state => state.data.userPlaylists.selectedPlaylist);

  const [volume, setVolume] = useState(100);
  const [muted, setMuted] = useState(false);

  const audioRef = useRef(null);
  
  const onSongEnd = () => {
    dispatch(dataActions.pauseSong());
    audioRef.current.load(songData?.song?.track?.["preview_url"] || songData?.song?.["preview_url"]);
  }

  useEffect(() => {
    if(audioRef.current && (songData?.song?.track?.["preview_url"] || songData?.song?.["preview_url"])) {
      !audioRef.current.paused && audioRef.current.pause();
    }

    audioRef.current = new Audio(songData?.song?.track?.["preview_url"] || songData?.song?.["preview_url"]);
    dispatch(dataActions.playSong());
    audioRef.current.play();

    audioRef.current.onended = onSongEnd;

    return () => {
      if(audioRef.current && !audioRef.current.paused) {
        dispatch(dataActions.pauseSong());
        audioRef.current.pause();
      }
    }
  }, [JSON.stringify(songData)]);

  const handleClose = () => {
    dispatch(dataActions.closePlayer());
  };

  const playSong = (event) => {
    event.stopPropagation();
    dispatch(dataActions.playSong());
    audioRef.current?.play();
  };

  const pauseSong = (event) => {
    event.stopPropagation();
    if(audioRef.current && !audioRef.current.paused) {
      dispatch(dataActions.pauseSong());
      audioRef.current?.pause();
    }
  };

  const prevSong = (event) => {
    event.stopPropagation();
    dispatch(dataActions.playPrevSong(selectedPlaylist, selectedAlbum));
  };

  const nextSong = (event) => {
    event.stopPropagation();
    dispatch(dataActions.playNextSong(selectedPlaylist, selectedAlbum));
  };

  const handlePlayerClick = () => {
    dispatch(dataActions.openMobilePlayer());
  };

  const onMuteClick = () => {
    setMuted(true);
    audioRef.current.muted = true;
  };

  const onUnmuteClick = () => {
    setMuted(false);
    audioRef.current.muted = false;
  };

  const onVolumeChange = (event) => {
    setVolume(event.target.value);
    audioRef.current.volume = event.target.value/100;
  };

  const mobilePlayerProps = {
    playSong,
    pauseSong,
    prevSong,
    nextSong,
    onMuteClick,
    onUnmuteClick,
    onVolumeChange,
    muted,
    volume
  }

  return (
    <div className={styles["player-container"]} onClick={handlePlayerClick}>
      <div className={styles["player-song-details"]}>
        <img className={styles["song-image"]} src={songData?.song?.track?.album?.images?.[2]?.url || selectedAlbum?.images?.[0]?.url} alt={songData?.song?.track?.name || songData?.song?.name} />
        <div className={styles["song-text"]}>
          <div className={styles["song-title"]}>{songData?.song?.track?.name || songData?.song?.name}</div>
          <div className={styles["song-artist"]}>{songData?.song?.track?.album?.artists?.[0]?.name || songData?.song?.artists?.[0]?.name}</div>
        </div>
        {/* <MdFavorite /> */}
      </div>
      <div className={styles["player-controls"]}>
        <div className={styles["icons-container"]}>
          <MdShuffle fontSize={medFont} color={iconColor}  />
          <MdSkipPrevious className={styles["player-prev"]} fontSize={medFont} color={iconColor} onClick={prevSong} />
          {player.isPlaying ? <MdPauseCircleOutline onClick={pauseSong} fontSize={bigFont} /> : <MdPlayCircleOutline onClick={playSong} fontSize={bigFont}/> }
          <MdSkipNext className={styles["player-next"]} fontSize={medFont} color={iconColor} onClick={nextSong} />
          <MdOutlineRepeat fontSize={medFont} color={iconColor}  />
        </div>
        <ProgressBar backgroundColor={"white"} duration={(songData?.song?.track?.duration_ms || 1000)/10000} completed={(audioRef.current?.currentTime || 0)}/>
      </div>
      <div className={styles["volume-controls"]}>
          {!muted ? <MdOutlineVolumeUp onClick={onMuteClick} /> : <MdOutlineVolumeOff onClick={onUnmuteClick} />}
          <input className={styles["slider"]} type={"range"} value={volume} onChange={onVolumeChange}/>
        <MdOutlineClose onClick={handleClose}/>
      </div>
      <MobilePlayer audio={audioRef} {...mobilePlayerProps} />
    </div>
  );
};

export default Player;
