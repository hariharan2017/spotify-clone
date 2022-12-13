import React, { useEffect, Suspense, lazy } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { getTokenFromUrl } from "./helpers/auth";
import { actions as authActions } from "./store/auth";
import { actions as spotifyActions } from "./store/spotify";
import Sidebar from "./components/Sidebar";
import Topbar from "./components/Topbar";
import BottomBar from "./components/BottomBar";
import Home from "./views/Home";
import Player from "./components/Player";
import Error from "./views/Error";

import styles from "./App.module.scss";
import SpotifyWebApi from "spotify-web-api-js";

const Playlist = lazy(() => import("./views/Playlist"));
const Album = lazy(() => import("./views/Album"));
const Search = lazy(() => import("./views/Search"));
const Library = lazy(() => import("./views/Library"));

const spotify = new SpotifyWebApi();

const Layout = ({ children }) => {
  const player = useSelector((state) => state.data.player);

  return (
    <>
      <div className={styles["app-container"]}>
        <Sidebar />
        <div className={styles["main-container"]}>
          <Topbar />
          {children}
          <BottomBar />
        </div>
      </div>
      {player.showPlayer && <Player />}
    </>
  );
};

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const token = getTokenFromUrl(window.location.hash);
    if (token) {
      dispatch(authActions.storeToken(token));
      spotify.setAccessToken(token);
      dispatch(spotifyActions.storeSpotify(spotify));
    }
    window.location.hash = "";
  }, []);

  return (
    <BrowserRouter>
      <Layout>
        <Suspense fallback={<div className={styles["loading-container"]}>Loading...</div>} >
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/playlist/:playlistId" element={<Playlist />} />
            <Route path="/album/:albumId" element={<Album />} />
            <Route path="/search" element={<Search />} />
            <Route path="/library" element={<Library />} />
            <Route path="*" element={<Error />} />
          </Routes>
        </Suspense>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
