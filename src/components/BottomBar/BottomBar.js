import { useNavigate } from "react-router-dom";
import { MdHome, MdSearch, MdLibraryMusic } from "react-icons/md";
import styles from "./BottomBar.module.scss";

const iconStyle = styles["bottom-menu-icon-style"];

const BottomBar = () => {
  const navigate = useNavigate();
  
  const sideMenu1 = [
    { icon: <MdHome className={iconStyle} />, label: "Home", onClick: () => navigate("/")},
    { icon: <MdSearch className={iconStyle} />, label: "Search", onClick: () => navigate("/search")},
    { icon: <MdLibraryMusic className={iconStyle} />, label: "Your Library", onClick: () => navigate("/library")},
  ]

  return (
    <div className={styles["bottom-menu-container"]}>
      {sideMenu1.map((item) => {
        return (
          <div className={styles["bottom-menu-icon-container"]} key={item.label} onClick={item?.onClick}>
            {item.icon}
            <span className={styles["bottom-menu-icon-label"]}>{item.label}</span>
          </div>
        )
      })}
    </div>
  );
};

export default BottomBar;