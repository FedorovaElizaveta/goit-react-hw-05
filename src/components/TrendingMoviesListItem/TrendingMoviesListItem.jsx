import css from "./TrendingMoviesListItem.module.css";
import { Link } from "react-router-dom";

const TrendingMoviesListItem = ({ trendingMovie, getMovieId }) => {
  const handleMovieClick = () => {
    getMovieId(trendingMovie.id);
  };

  return (
    <Link className={css.movieLink} onClick={handleMovieClick}>
      {trendingMovie.original_title}
    </Link>
  );
};

export default TrendingMoviesListItem;
