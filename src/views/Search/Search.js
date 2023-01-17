import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getUri, getReleaseYear } from "../../helpers/methods";
import { actions as commonActions } from "../../store/common";
import { actions as searchActions } from "../../store/search";
import { searchTabs } from "./config";
import { tabIds } from "../../constants/constants";
import Button from "../../components/Button";
import Card from "../../components/Card";
import styles from "./Search.module.scss";

const Search = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const searchData = useSelector(state => state.search.searchData);
  const searchPageData = useSelector(state => state.search.searchPageData);

  useEffect(() => {
    dispatch(commonActions.showSearchBar());
    dispatch(searchActions.getCategories());

    return () => {
      dispatch(commonActions.hideSearchBar());
    }
  }, []);

  const handleTabClick = (tab) => {
    dispatch(searchActions.changeTab(tab));
  };

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
    if (!!searchData?.searchResults?.albums && (searchPageData.tab === tabIds.all || searchPageData.tab === tabIds.albums)) {
      return (
        <>
          {searchPageData.tab === tabIds.all && (
            <div className={styles["section-title"]}>Albums</div>
          )}
          <div className={styles["section-container"]}>
            {searchData?.searchResults?.albums?.items?.map((album) => {
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
        </>
      );
    }
  };

  const renderSearchPlaylists = () => {
    if (!!searchData?.searchResults?.playlists && (searchPageData.tab === tabIds.all || searchPageData.tab === tabIds.playlists)) {
      return (
        <>
          {searchPageData.tab === tabIds.all && (
            <div className={styles["section-title"]}>Playlists</div>
          )}
          <div className={styles["section-container"]}>
            {searchData?.searchResults?.playlists?.items?.map((playlist) => {
              const img = playlist?.images?.[0]?.url;
              const title = playlist?.name;
              const desc = "By " + playlist?.owner?.display_name;

              return (
                <Card
                  key={playlist?.uri}
                  id={playlist?.uri}
                  img={img}
                  title={title}
                  desc={desc}
                  onClick={() => handlePlaylistClick(playlist?.uri)}
                />
              );
            })}
          </div>
        </>
      );
    }
  }

  return (
    <div className={styles["search-container"]}>
      {!searchData?.searchResults &&
        searchData?.categories?.map((item) => {
          return (
            <div
              className={styles["search-card-container"]}
              key={item?.id}
              style={{ backgroundImage: `url(${item?.icons?.[0]?.url})` }}
              onClick={() => handleCategoryClick(item)}
            >
              <div className={styles["title"]}>{item?.name}</div>
            </div>
          );
        })}
      <div className={styles["search-tabs"]}>
        {searchData?.searchResults &&
          searchTabs.map((tab) => {
            return (
              <Button
                className={[styles["tab-style"]]}
                key={tab.id}
                type={tab.id === searchPageData.tab ? "primary" : "secondary"}
                onClick={() => handleTabClick(tab.id)}
              >
                {tab.label}
              </Button>
            );
          })}
      </div>
      {renderSearchAlbums()}
      {renderSearchPlaylists()}
    </div>
  );
};

export default Search;