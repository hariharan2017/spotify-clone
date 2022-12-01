import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { getTokenFromUrl } from "./helpers/auth";
import { actions as authActions } from "./store/auth";
import { actions as spotifyActions } from "./store/spotify";
import Sidebar from "./components/Sidebar";
import Topbar from "./components/Topbar";
import Home from "./views/Home";
import Playlist from "./views/Playlist";
import styles from "./App.module.scss";
import SpotifyWebApi from "spotify-web-api-js";
import Player from "./components/Player";

const spotify = new SpotifyWebApi();

const Layout = ({ children }) => {
  const songData = useSelector(state => state.data.song);

  return (
    <div className={styles["app-container"]}>
      <Sidebar />
      <div className={styles["main-container"]}>
        <Topbar />
        {children}
      </div>
      {songData.showPlayer && <Player />}
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
        <Route path="/playlist/:playlistId" element={<Layout><Playlist /></Layout>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
