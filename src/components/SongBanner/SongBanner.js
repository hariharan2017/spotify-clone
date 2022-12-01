import { showHrMinsDuration } from "../../helpers/methods";
import styles from "./SongBanner.module.scss";

const SongBanner = ({ type, name, description, owner, followers, totalTracks, duration }) => {
  return (
    <div className={styles["banner-text-container"]}>
      <div className={styles["banner-text-type"]}>{type}</div>
      <div className={styles["banner-text-title"]}>{name}</div>
      <div className={styles["banner-text-desc"]}>{description}</div>
      <div className={styles["banner-footer-container"]}>
        <div className={styles["banner-footer-owner"]}>{owner}</div>
        <div className={styles["banner-footer-spacer"]}>.</div>
        <div className={styles["banner-footer-likes"]}>{followers}</div>
        <div className={styles["banner-footer-spacer"]}>.</div>
        <div className={styles["banner-footer-songs"]}>{totalTracks}</div>
        <div className={styles["banner-footer-spacer"]}>.</div>
        <div className={styles["banner-footer-duration"]}>{showHrMinsDuration(duration)}</div>
      </div>
    </div>
  );
};

export default SongBanner;