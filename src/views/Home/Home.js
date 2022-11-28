import HomeData from "../../data/home.json";
import Card from "../../components/Card";
import styles from "./Home.module.scss";

const Home = () => {
  const { sections } = HomeData.data.home.sectionContainer;

  return (
    <div className={styles["home-container"]}>
      {sections.items.map((section) => {
        return (
          <div className={styles["section-container"]}>
            <div className={styles["section-title"]}>{section?.data?.title?.text}</div>
            <div className={styles["section-playlists-container"]}>
              {section?.sectionItems?.items?.map((item) => {
                const img = item?.content?.data?.images?.items?.[0]?.sources?.[0]?.url || item?.content?.data?.coverArt?.sources?.[0]?.url;
                const title = item?.content?.data?.name;
                const desc = item?.content?.data?.description || item?.content?.data?.artists?.items?.[0]?.profile?.name;

                return <Card img={img} title={title} desc={desc} />;
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Home;
