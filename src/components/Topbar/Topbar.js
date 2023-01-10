import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { accessUrl } from "../../helpers/spotify";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import { actions as authActions } from "../../store/auth";
import { actions as dataActions } from "../../store/data";
import { actions as searchActions } from "../../store/search";
import { actions as commonActions } from "../../store/common";
import { debounce } from "../../helpers/methods";
import { DARK_GREY_COLOR } from "../../constants/constants";
import Button from "../Button";
import styles from "./Topbar.module.scss";

const inputSearchPlaceholder = "What do you want to listen to?";

const Topbar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const auth = useSelector(state => state.authentication.auth);
  const profile = useSelector(state => state.authentication.profile.details);
  const color = useSelector(state => state.common.color);
  const searchVisibility = useSelector(state => state.common.searchVisibility)

  const [search, setSearch] = useState("");

  useEffect(() => {
    dispatch(commonActions.showSearchBar());

    return () => dispatch(commonActions.hideSearchBar());
  }, [])

  useEffect(() => {
    if(auth?.token) {
      dispatch(authActions.fetchUserDetails());
      dispatch(dataActions.getUserPlaylists());
    }
  }, [JSON.stringify(auth)]);

  useEffect(() => {
    dispatch(searchActions.getSearchResults(search));
  }, [search]);

  const handleLogout = () => {
    navigate("/");
    dispatch(dataActions.clearData());
    dispatch(authActions.logOut());
  };

  const handleSearchChange = debounce((event) => {
    setSearch(event.target.value);
  }, 500);

  return (
    <div className={styles["topbar-container"]} style={{ backgroundColor: color || DARK_GREY_COLOR }}>
      <div className={styles["topbar-icons-container"]}>
        <span className={styles["icon-parent-styles"]}><MdChevronLeft className={styles["topbar-icon-styles"]} /></span>
        <span className={styles["icon-parent-styles"]}><MdChevronRight className={styles["topbar-icon-styles"]} /></span>
      </div>
      <div className={styles["topbar-search-container"]}>
        {searchVisibility && <input placeholder={inputSearchPlaceholder} onChange={handleSearchChange}/>}
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