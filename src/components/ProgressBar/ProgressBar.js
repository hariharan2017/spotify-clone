import { memo } from "react";
import styles from "./ProgressBar.module.scss";

const ProgressBar = ({ backgroundColor, completed, showLabel = false }) => {
  return (
    <div className={styles["progress-bar-container"]}>
      <div className={styles["progress-bar-filler"]} style={{ width: `${completed}`, backgroundColor: `${backgroundColor}` }}>
        {showLabel && <span className={styles["progress-bar-label"]}>{`${completed}%`}</span>}
      </div>
    </div>
  );
};

export default memo(ProgressBar);
