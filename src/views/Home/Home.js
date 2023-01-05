import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getUri } from "../../helpers/methods";
import { actions } from "../../store/home";
import { strings } from "../../constants/constants";
import HomeData from "../../data/home.json";
import Card from "../../components/Card";
import styles from "./Home.module.scss";

const Home = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { sections } = HomeData.data.home.sectionContainer;
  const auth = useSelector((state) => state.authentication.auth);
  const home = useSelector((state) => state.home);

  const handlePlaylistClick = (uriId) => {
    navigate(`/playlist/${getUri(uriId)}`);
  };

  const handleAlbumClick = (uriId) => {
    navigate(`/album/${getUri(uriId)}`);
  };

  useEffect(() => {
    if (auth.loggedIn) {
      dispatch(actions.getUserTopItems());
    }
  }, [JSON.stringify(auth)]);

  const renderRecentlyPlayed = () => {
    if (!!home.tracks.length) {
      return (
        <div className={styles["section-container"]} key={"recently-played"}>
          <div className={styles["section-title"]}>{strings.recentPlayed}</div>
          <div className={styles["section-playlists-container"]}>
            {home.tracks.map((item) => {
              const img = item?.album?.images?.[0]?.url;
              const title = item?.name;
              const desc = item?.album?.name;

              return (
                <Card
                  key={item?.album?.uri}
                  id={item?.album?.uri}
                  img={img}
                  title={title}
                  desc={desc}
                  onClick={() => handleAlbumClick(item?.album?.uri)}
                />
              );
            })}
          </div>
        </div>
      );
    }
  };

  const renderFeatPlaylists = () => {
    if (!!home.featPlaylists.length) {
      return (
        <div className={styles["section-container"]} key={"featured-playlists"}>
          <div className={styles["section-title"]}>
            {strings.featuredPlaylists}
          </div>
          <div className={styles["section-playlists-container"]}>
            {home.featPlaylists.map((item) => {
              const img = item?.images?.[0]?.url;
              const title = item?.name;
              const desc = item?.description;

              return (
                <Card
                  key={item?.uri}
                  id={item?.uri}
                  img={img}
                  title={title}
                  desc={desc}
                  onClick={() => handlePlaylistClick(item?.uri)}
                />
              );
            })}
          </div>
        </div>
      );
    }
  };

  const renderNewReleases = () => {
    if(!!home.releases.length) {
      return (
        <div className={styles["section-container"]} key={"new-releases"}>
          <div className={styles["section-title"]}>
            {strings.newReleases}
          </div>
          <div className={styles["section-playlists-container"]}>
            {home.releases.map((item) => {
              const img = item?.images?.[0]?.url;
              const title = item?.name;
              const desc = item?.artists?.[0]?.name;

              return (
                <Card
                  key={item?.uri}
                  id={item?.uri}
                  img={img}
                  title={title}
                  desc={desc}
                  onClick={() => handleAlbumClick(item?.uri)}
                />
              );
            })}
          </div>
        </div>
      );
    }
  }

  return (
    <div className={styles["home-container"]}>
      {renderRecentlyPlayed()}
      {renderFeatPlaylists()}
      {renderNewReleases()}
      {sections.items.map((section) => {
        return (
          <div className={styles["section-container"]} key={section?.uri}>
            <div className={styles["section-title"]}>
              {section?.data?.title?.text}
            </div>
            <div className={styles["section-playlists-container"]}>
              {section?.sectionItems?.items?.map((item) => {
                const img =
                  item?.content?.data?.images?.items?.[0]?.sources?.[0]?.url ||
                  item?.content?.data?.coverArt?.sources?.[0]?.url;
                const title = item?.content?.data?.name;
                const desc =
                  item?.content?.data?.description ||
                  item?.content?.data?.artists?.items?.[0]?.profile?.name;

                return (
                  <Card
                    key={item?.uri}
                    id={item?.uri}
                    img={img}
                    title={title}
                    desc={desc}
                    onClick={() => handlePlaylistClick(item?.uri)}
                  />
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Home;
