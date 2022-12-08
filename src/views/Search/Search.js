import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { actions as searchActions } from "../../store/search";
import styles from "./Search.module.scss";

const Search = () => {
  const dispatch = useDispatch();
  const search = useSelector(state => state.search);

  useEffect(() => {
    dispatch(searchActions.getCategories());
  }, []);

  return (
    <div className={styles["search-container"]}>
      {search?.categories?.map((item) => {
        return (
          <div className={styles["search-card-container"]} key={item?.id} style={{ backgroundImage: `url(${item?.icons?.[0]?.url})`}}>
            <div className={styles["title"]}>{item?.name}</div>
          </div>
        )
      })}
    </div>
  );
};

export default Search;