import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { MdFavorite, MdShuffle, MdSkipPrevious, MdPlayCircleOutline, MdSkipNext, MdOutlineRepeat, MdOutlineVolumeUp, MdOutlineVolumeOff, MdOutlineClose, MdPauseCircleOutline } from "react-icons/md";
import { actions as dataActions } from "../../store/data";
import styles from "./Player.module.scss";

const medFont = "1.75rem";
const bigFont = "2.5rem";
const iconColor = "grey";

const Player = () => {
  const dispatch = useDispatch();
  const songData = useSelector(state => state.data.song);
  const player = useSelector(state => state.data.player);
  const selectedAlbum = useSelector(state => state.data.album.selectedAlbum);
  const selectedPlaylist = useSelector(state => state.data.userPlaylists.selectedPlaylist);

  const audioRef = useRef(null);
  
  useEffect(() => {
    if(audioRef.current && (songData?.song?.track?.["preview_url"] || songData?.song?.["preview_url"])) {
      !audioRef.current.paused && audioRef.current.pause();
      audioRef.current = new Audio(songData?.song?.track?.["preview_url"] || songData?.song?.["preview_url"]);
      dispatch(dataActions.playSong());
      audioRef.current.play();
    } else {
      audioRef.current = new Audio(songData?.song?.track?.["preview_url"] || songData?.song?.["preview_url"]);
      dispatch(dataActions.playSong());
      audioRef.current.play();
    }

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

  const playSong = () => {
    dispatch(dataActions.playSong());
    audioRef.current?.play();
  };

  const pauseSong = () => {
    dispatch(dataActions.pauseSong());
    audioRef.current?.pause();
  };

  const prevSong = () => {
    dispatch(dataActions.playPrevSong(selectedPlaylist, selectedAlbum));
  };

  const nextSong = () => {
    dispatch(dataActions.playNextSong(selectedPlaylist, selectedAlbum));
  };

  return (
    <div className={styles["player-container"]}>
      <div className={styles["player-song-details"]}>
        <img className={styles["song-image"]} src={songData?.song?.track?.album?.images?.[2]?.url || selectedAlbum?.images?.[0]?.url} />
        <div className={styles["song-text"]}>
          <div className={styles["song-title"]}>{songData?.song?.track?.name || songData?.song?.name}</div>
          <div className={styles["song-artist"]}>{songData?.song?.track?.album?.artists?.[0]?.name || songData?.song?.artists?.[0]?.name}</div>
        </div>
        <MdFavorite />
      </div>
      <div className={styles["player-controls"]}>
        <div className={styles["icons-container"]}>
          <MdShuffle fontSize={medFont} color={iconColor}  />
          <MdSkipPrevious className={styles["player-prev"]} fontSize={medFont} color={iconColor} onClick={prevSong} />
          {player.isPlaying ? <MdPauseCircleOutline onClick={pauseSong} fontSize={bigFont} /> : <MdPlayCircleOutline onClick={playSong} fontSize={bigFont}/> }
          <MdSkipNext className={styles["player-next"]} fontSize={medFont} color={iconColor} onClick={nextSong} />
          <MdOutlineRepeat fontSize={medFont} color={iconColor}  />
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
