import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Topbar from "./components/Topbar";
import Home from "./views/Home";
import styles from "./App.module.scss";
import { getTokenFromUrl } from "./helpers/auth";
import { actions as authActions } from "./store/auth";
import { actions as spotifyActions } from "./store/spotify";
import SpotifyWebApi from "spotify-web-api-js";

const spotify = new SpotifyWebApi();

const Layout = ({ children }) => {
  return (
    <div className={styles["app-container"]}>
      <Sidebar />
      <div className={styles["main-container"]}>
        <Topbar />
        {children}
      </div>
    </div>
  );
};

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const token = (getTokenFromUrl(window.location.hash));
    if(token) {
      dispatch(authActions.storeToken(token));
      spotify.setAccessToken(token);
      dispatch(spotifyActions.storeSpotify(spotify));
    }
    window.location.hash = "";
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout><Home /></Layout>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
