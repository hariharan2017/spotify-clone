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

  const handleCardClick = (uriId) => {
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

  return (
    <div className={styles["home-container"]}>
      {!!home.tracks.length && <div className={styles["section-container"]} key={"recently-played"}>
        <div className={styles["section-title"]}>
          {strings.recentPlayed}
        </div>
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
      </div>}
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
                    onClick={() => handleCardClick(item?.uri)}
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
