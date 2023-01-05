import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { accessUrl } from "../../helpers/spotify";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import { actions as authActions } from "../../store/auth";
import { actions as dataActions } from "../../store/data";
import { DARK_GREY_COLOR } from "../../constants/constants";
import Button from "../Button";
import styles from "./Topbar.module.scss";

const Topbar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const auth = useSelector(state => state.authentication.auth);
  const profile = useSelector(state => state.authentication.profile.details);
  const color = useSelector(state => state.common.color);

  useEffect(() => {
    if(auth?.token) {
      dispatch(authActions.fetchUserDetails());
      dispatch(dataActions.getUserPlaylists());
    }
  }, [JSON.stringify(auth)]);

  const handleLogout = () => {
    navigate("/");
    dispatch(dataActions.clearData());
    dispatch(authActions.logOut());
  };

  return (
    <div className={styles["topbar-container"]} style={{ backgroundColor: color || DARK_GREY_COLOR }}>
      <div className={styles["topbar-icons-container"]}>
        <span className={styles["icon-parent-styles"]}><MdChevronLeft className={styles["topbar-icon-styles"]} /></span>
        <span className={styles["icon-parent-styles"]}><MdChevronRight className={styles["topbar-icon-styles"]} /></span>
      </div>
      {!auth?.loggedIn && <div className={styles["topbar-buttons-container"]}>
        <Button type={"secondary"}>Sign Up</Button>
        <a href={accessUrl}><Button type={"primary"} >Log In</Button></a>
      </div>}
      {auth?.loggedIn && <div className={styles["profile-container"]}>
        <img className={styles["profile-image"]} src={profile?.images?.[0]?.url} alt="Profile Image"/>
        <label classNcame={styles["profile-name"]} style={{ margin: "5px" }}>{profile?.["display_name"]}</label>
        <div style={{ padding: "10px", cursor: "pointer" }} onClick={handleLogout}>Logout</div>
      </div>}
    </div>
  )
};

export default Topbar;