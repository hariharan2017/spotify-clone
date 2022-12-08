import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { MdWaves, MdHome, MdSearch, MdLibraryMusic, MdPlaylistAdd, MdFavoriteBorder } from "react-icons/md";
import { getUri } from "../../helpers/methods";
import styles from "./Sidebar.module.scss";

const iconStyle = styles["side-icon-style"];

const Sidebar = () => {
  const navigate = useNavigate();
  const currPlaylists = useSelector(state => state.data.userPlaylists.currentUserPlaylists);
  
  const sideMenu1 = [
    { icon: <MdHome className={iconStyle} />, label: "Home", onClick: () => navigate("/")},
    { icon: <MdSearch className={iconStyle} />, label: "Search", onClick: () => navigate("/search")},
    { icon: <MdLibraryMusic className={iconStyle} />, label: "Your Library"},
  ]
  
  const sideMenu2 = [
    { icon: <MdPlaylistAdd className={iconStyle} />, label: "Create Playlist"},
    { icon: <MdFavoriteBorder className={iconStyle} />, label: "Liked Songs"},
  ]

  const handlePlaylistItem = (item) => {
    navigate(`/playlist/${getUri(item?.uri)}`);
  }

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
              <div className={styles["side-menu-icon-container"]} key={item.label} onClick={item?.onClick}>
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
      {!!currPlaylists?.items && <div className={styles["sidebar-divider"]} />}
      <div className={styles["playlist-items"]}>
        {currPlaylists?.items?.map((item) => {
          return <div className={styles["playlist-row-item"]} key={item?.uri} onClick={() => handlePlaylistItem(item)}>{item?.name}</div>
        })}
      </div>
    </div>
  )
};

export default Sidebar;