import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import styles from './LoadingSkeleton.module.scss';
import 'react-loading-skeleton/dist/skeleton.css'

const LoadingSkeleton = ({ type }) => {
  if (type === "banner") {
    return (
      <SkeletonTheme baseColor="#797979" highlightColor="#444">
        <div className={styles["banner-container"]}>
          <div className={styles["image"]}>
            <Skeleton count={6}/>
          </div>
          <div className={styles["text-container"]}>
            <Skeleton width={"20%"}/>
            <Skeleton count={3}/>
            <Skeleton count={2} width={"50%"}/>
          </div>
        </div>
      </SkeletonTheme>
    );
  } else if (type === "row") {
    return (
      <SkeletonTheme baseColor="#797979" highlightColor="#444">
      <div className={styles["row-container"]}>
        {[...Array(10)].map((item, idx) => {
          return (
            <div className={styles["row-item"]}>
              <Skeleton count={2}/>
            </div>
          )
        })}
        </div>
      </SkeletonTheme>
    );
  } else {
    return null;
  }
};

export default LoadingSkeleton;
