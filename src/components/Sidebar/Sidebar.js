import { MdWaves, MdHome, MdSearch, MdLibraryMusic, MdPlaylistAdd, MdFavoriteBorder } from "react-icons/md";
import styles from "./Sidebar.module.scss";

const iconStyle = styles["side-icon-style"];

const Sidebar = () => {
  
  const sideMenu1 = [
    { icon: <MdHome className={iconStyle} />, label: "Home"},
    { icon: <MdSearch className={iconStyle} />, label: "Search"},
    { icon: <MdLibraryMusic className={iconStyle} />, label: "Your Library"},
  ]
  
  const sideMenu2 = [
    { icon: <MdPlaylistAdd className={iconStyle} />, label: "Create Playlist"},
    { icon: <MdFavoriteBorder className={iconStyle} />, label: "Liked Songs"},
  ]

  return (
    <div className={styles["sidebar-container"]}>
      <div className={styles["title-container"]}>
        <MdWaves className={styles["title-logo"]}/>
        <span className={styles["title-label"]}>Splotify</span>
      </div>
      <div>
        <div className={styles["side-menu-1-container"]}>
          {sideMenu1.map((item) => {
            return (
              <div className={styles["side-menu-icon-container"]} key={item.label}>
                {item.icon}
                <span className={styles["side-icon-label"]}>{item.label}</span>
              </div>
            )
          })}
        </div>
        <div className={styles["side-menu-2-container"]}>
          {sideMenu2.map((item) => {
            return (
              <div className={styles["side-menu-icon-container"]} key={item.label}>
                {item.icon}
                <span className={styles["side-icon-label"]}>{item.label}</span>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
};

export default Sidebar;