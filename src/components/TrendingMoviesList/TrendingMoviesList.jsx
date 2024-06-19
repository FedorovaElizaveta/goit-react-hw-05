import { Link, useLocation } from "react-router-dom";
import css from "./TrendingMoviesList.module.css";

const TrendingMoviesList = ({ trendingMovies }) => {
  const location = useLocation();

  return (
    <>
      <h2 className={css.trendingMoviesTitle}>Trending Movies</h2>
      <ul className={css.trendingMoviesList}>
        {trendingMovies.map((trendingMovie) => (
          <li key={trendingMovie.id}>
            <Link
              to={`/movies/${trendingMovie.id}`}
              location={location}
              className={css.movieLink}
            >
              {trendingMovie.original_title}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default TrendingMoviesList;
