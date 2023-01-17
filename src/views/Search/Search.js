import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getUri, getReleaseYear } from "../../helpers/methods";
import { actions as searchActions } from "../../store/search";
import Card from "../../components/Card";
import styles from "./Search.module.scss";

const Search = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const search = useSelector(state => state.search);

  useEffect(() => {
    dispatch(searchActions.getCategories());
  }, []);

  const handleCategoryClick = (item) => {
    dispatch(searchActions.getSingleCategory(item?.id));
    // navigate(`/category/${item?.id}`);
  };

  const handlePlaylistClick = (uriId) => {
    navigate(`/playlist/${getUri(uriId)}`);
  };

  const handleAlbumClick = (uriId) => {
    navigate(`/album/${getUri(uriId)}`);
  };

  const renderSearchAlbums = () => {
    if (!!search?.searchResults?.albums) {
      return (
        <div className={styles["section-container"]}>
          {search?.searchResults?.albums?.items?.map((album) => {
            const img = album?.images?.[0]?.url;
            const title = album?.name;
            const desc = getReleaseYear(album?.release_date) + " . " + album?.artists?.[0]?.name;

            return (
              <Card
                key={album?.uri}
                id={album?.uri}
                img={img}
                title={title}
                desc={desc}
                onClick={() => handleAlbumClick(album?.uri)}
              />
            );
          })}
        </div>
      );
    }
  };

  return (
    <div className={styles["search-container"]}>
      {!search?.searchResults && search?.categories?.map((item) => {
        return (
          <div className={styles["search-card-container"]} key={item?.id} style={{ backgroundImage: `url(${item?.icons?.[0]?.url})`}} onClick={() => handleCategoryClick(item)}>
            <div className={styles["title"]}>{item?.name}</div>
          </div>
        )
      })}
      {renderSearchAlbums()}
    </div>
  );
};

export default Search;