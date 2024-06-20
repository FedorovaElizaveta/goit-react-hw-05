import { Link, useLocation } from "react-router-dom";
import css from "./TrendingMoviesList.module.css";
import TrendingMoviesListItem from "../TrendingMoviesListItem/TrendingMoviesListItem";

const TrendingMoviesList = ({ trendingMovies }) => {
  const location = useLocation();

  return (
    <div className={css.trendingMoviesListContainer}>
      <h2 className={css.trendingMoviesTitle}>Trending Movies</h2>
      <ul className={css.trendingMoviesList}>
        {trendingMovies.map((trendingMovie) => (
          <li key={trendingMovie.id}>
            <Link
              to={`/movies/${trendingMovie.id}`}
              location={location}
              className={css.movieLink}
            >
              <TrendingMoviesListItem trendingMovie={trendingMovie} />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TrendingMoviesList;
