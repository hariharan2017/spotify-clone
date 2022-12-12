import { useState, useEffect, memo } from "react";
import { useSelector } from "react-redux";
import classNames from "classnames";
import styles from "./ProgressBar.module.scss";

let interval;

const ProgressBar = ({ backgroundColor, duration, completed, showLabel = false, className }) => {

  const songData = useSelector(state => state.data.song);
  const player = useSelector(state => state.data.player);

  const [progress, setProgress] = useState(completed);

  useEffect(() => {
    interval = setInterval(() => {
      if(progress <= duration) {
        setProgress(progress+1);
      }
    }, 1000);

    return () => clearInterval(interval);
  });

  useEffect(() => {
    setProgress(0);
  }, [JSON.stringify(songData)]);

  useEffect(() => {
    if(player.isPlaying === false) clearInterval(interval);
  }, [player.isPlaying])

  return (
    <div className={classNames(styles["progress-bar-container"], className)}>
      <div className={styles["progress-bar-filler"]} style={{ width: `${(progress/(duration||1))%100}%`, backgroundColor: `${backgroundColor}` }}>
        {showLabel && <span className={styles["progress-bar-label"]}>{`${progress}%`}</span>}
      </div>
    </div>
  );
};

export default memo(ProgressBar);
