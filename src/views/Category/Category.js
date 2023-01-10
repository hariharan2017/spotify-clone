import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { actions } from "../../store/search";

const Category = () => {
  const dispatch = useDispatch();

  const { categoryId } = useParams();

  useEffect(() => {
    dispatch(actions.getSingleCategory(categoryId))
  }, [])

  return (
    <div>
      <h4>Category</h4>
    </div>
  );
};

export default Category;
