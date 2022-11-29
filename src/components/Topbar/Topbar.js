import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import { accessUrl } from "../../helpers/spotify";
import { useSelector } from "react-redux";
import Button from "../Button";
import styles from "./Topbar.module.scss";
import { useEffect } from "react";

const Topbar = () => {

  const spotifyWrapper = useSelector(state => state.spotify.wrapper);

  useEffect(() => {
    console.log(spotifyWrapper);
    spotifyWrapper?.getMe().then((res) => {
      console.log(res);
    });
  }, [spotifyWrapper])

  return (
    <div className={styles["topbar-container"]}>
      <div className={styles["topbar-icons-container"]}>
        <span className={styles["icon-parent-styles"]}><MdChevronLeft className={styles["topbar-icon-styles"]} /></span>
        <span className={styles["icon-parent-styles"]}><MdChevronRight className={styles["topbar-icon-styles"]} /></span>
      </div>
      <div className={styles["topbar-buttons-container"]}>
        <Button type={"secondary"}>Sign Up</Button>
        <a href={accessUrl}><Button type={"primary"} >Log In</Button></a>
      </div>
    </div>
  )
};

export default Topbar;