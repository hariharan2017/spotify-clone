import HomeData from "../../data/home.json";
import Card from "../../components/Card";
import styles from "./Home.module.scss";

const Home = () => {
  const { sections } = (HomeData.data.home.sectionContainer);
  const { data, sectionItems } = (sections.items[0]);

  return (
    <div className={styles["home-container"]}>
      <div className={styles["section-container"]}>
        <div className={styles["section-title"]}>{data?.title?.text}</div>
        <div className={styles["section-playlists-container"]}>
          {sectionItems?.items?.map((item) => {
            const img = item?.content?.data?.images?.items?.[0]?.sources?.[0]?.url;
            const title = item?.content?.data?.name;
            const desc = item?.content?.data?.description;

            return (
              <div>
                <Card img={img} title={title} desc={desc} />
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Home;