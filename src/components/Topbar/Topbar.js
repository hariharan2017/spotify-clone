import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { accessUrl } from "../../helpers/spotify";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import { actions as authActions } from "../../store/auth";
import Button from "../Button";
import styles from "./Topbar.module.scss";

const Topbar = () => {
  const dispatch = useDispatch();
  const auth = useSelector(state => state.authentication.auth);
  const profile = useSelector(state => state.authentication.profile.details)

  useEffect(() => {
    if(auth?.token) {
      dispatch(authActions.fetchUserDetails());
    }
  }, [JSON.stringify(auth)]);

  const handleLogout = () => {
    dispatch(authActions.logOut());
  };

  return (
    <div className={styles["topbar-container"]}>
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
        <label className={styles["profile-name"]}>{profile?.["display_name"]}</label>
        <div style={{ padding: "10px", cursor: "pointer" }} onClick={handleLogout}>Logout</div>
      </div>}
    </div>
  )
};

export default Topbar;