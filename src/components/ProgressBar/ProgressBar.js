import { memo } from "react";
import { showMinSecsDuration } from "../../helpers/methods";
import classNames from "classnames";
import styles from "./ProgressBar.module.scss";

//Preview songs from Spotify are 30 secs long
const ProgressBar = ({ backgroundColor, completed, duration = 30000, showLabel = false, className, mobile }) => {

  return (
    <div className={styles["progress-bar-container"]}>
      <div className={styles["song-progress-label"]} >{showMinSecsDuration(completed)}</div>
      <div className={classNames(styles["progress-bar-parent"], className)}>
        <div className={styles["progress-bar-filler"]} style={{ width: `${(completed/duration)*100}%`, backgroundColor }}>
          {showLabel && <span className={styles["progress-bar-label"]}>{`${(completed/duration)*100}%`}</span>}
        </div>
      </div>
      <div className={styles["song-progress-label"]}>{showMinSecsDuration(duration)}</div>
    </div>
  );
};

export default memo(ProgressBar);
