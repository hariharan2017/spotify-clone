import { useNavigate } from "react-router-dom";
import { getUri } from "../../helpers/methods";
import HomeData from "../../data/home.json";
import Card from "../../components/Card";
import styles from "./Home.module.scss";

const Home = () => {
  const navigate = useNavigate();
  const { sections } = HomeData.data.home.sectionContainer;

  const handleCardClick = (uriId) => {
    navigate(`/playlist/${getUri(uriId)}`);
  };

  return (
    <div className={styles["home-container"]}>
      {sections.items.map((section) => {
        return (
          <div className={styles["section-container"]} key={section?.uri}>
            <div className={styles["section-title"]}>{section?.data?.title?.text}</div>
            <div className={styles["section-playlists-container"]}>
              {section?.sectionItems?.items?.map((item) => {
                const img = item?.content?.data?.images?.items?.[0]?.sources?.[0]?.url || item?.content?.data?.coverArt?.sources?.[0]?.url;
                const title = item?.content?.data?.name;
                const desc = item?.content?.data?.description || item?.content?.data?.artists?.items?.[0]?.profile?.name;

                return <Card key={item?.uri} id={item?.uri} img={img} title={title} desc={desc} onClick={() => handleCardClick(item?.uri)}/>;
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Home;
