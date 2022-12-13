import { useSelector } from "react-redux";
import { getReleaseYear, showHrMinsDuration } from "../../helpers/methods";
import LoadingSkeleton from "../LoadingSkeleton";
import styles from "./SongBanner.module.scss";

const SongBanner = ({ type, name, description, owner, followers, releaseDate, totalTracks, duration, image }) => {
  const common = useSelector(state => state.common);

  if(common.loading) {
    return <LoadingSkeleton type={"banner"} />;
  } else {
    return (
      <div className={styles["banner-container"]}>
      <div className={styles["image-container"]}>
        <img className={styles["playlist-banner-image"]} src={image} alt={name}/>
      </div>
      <div className={styles["banner-text-container"]}>
        <div className={styles["banner-text-type"]}>{type}</div>
        <div className={styles["banner-text-title"]}>{name}</div>
        <div className={styles["banner-text-desc"]}>{description}</div>
        <div className={styles["banner-footer-container"]}>
          <div className={styles["banner-footer-owner"]}>{owner}</div>
          <div className={styles["banner-footer-spacer"]}>.</div>
          {followers && 
            <>
              <div className={styles["banner-footer-likes"]}>{followers}</div>
              <div className={styles["banner-footer-spacer"]}>.</div>
            </>
          }
          {releaseDate && 
            <>
              <div className={styles["banner-footer-likes"]}>{getReleaseYear(releaseDate)}</div>
              <div className={styles["banner-footer-spacer"]}>.</div>
            </>
          }
          <div className={styles["banner-footer-songs"]}>{totalTracks}</div>
          <div className={styles["banner-footer-spacer"]}>.</div>
          <div className={styles["banner-footer-duration"]}>{showHrMinsDuration(duration)}</div>
        </div>
      </div>
    </div>
    );
  }
};

export default SongBanner;