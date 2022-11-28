import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import Button from "../Button";
import styles from "./Topbar.module.scss";

const Topbar = () => {
  return (
    <div className={styles["topbar-container"]}>
      <div className={styles["topbar-icons-container"]}>
        <span className={styles["icon-parent-styles"]}><MdChevronLeft className={styles["topbar-icon-styles"]} /></span>
        <span className={styles["icon-parent-styles"]}><MdChevronRight className={styles["topbar-icon-styles"]} /></span>
      </div>
      <div className={styles["topbar-buttons-container"]}>
        <Button type={"secondary"}>Sign Up</Button>
        <Button type={"primary"}>Log In</Button>
      </div>
    </div>
  )
};

export default Topbar;