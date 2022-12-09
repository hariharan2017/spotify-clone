import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getUri } from "../../helpers/methods";
import styles from "./Library.module.scss";

const Library = () => {
  const navigate = useNavigate();
  const currPlaylists = useSelector(state => state.data.userPlaylists.currentUserPlaylists);
  
  const handlePlaylistItem = (item) => {
    navigate(`/playlist/${getUri(item?.uri)}`);
  };

  return (
    <div className={styles["library-container"]}>
      {currPlaylists?.items?.map((item) => {
        return (
          <div className={styles["row-container"]} onClick={() => handlePlaylistItem(item)}>
            <img className={styles["image"]} src={item?.images?.[0]?.url} />
            <div className={styles["text"]}>
              <div className={styles["text-top"]}>{item?.name}</div>
              <div className={styles["text-bottom"]}>{item?.type} . {item?.owner?.display_name}</div>
            </div>
          </div>
        )
      })}
    </div>
  );
};

export default Library;
