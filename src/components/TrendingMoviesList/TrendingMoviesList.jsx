import css from "./TrendingMoviesList.module.css";
import TrendingMoviesListItem from "../TrendingMoviesListItem/TrendingMoviesListItem";

const TrendingMoviesList = ({ trendingMovies, getMovieId }) => {
  return (
    <>
      <h2 className={css.trendingMoviesTitle}>Trending Movies</h2>
      <ul className={css.trendingMoviesList}>
        {trendingMovies.map((trendingMovie) => (
          <li key={trendingMovie.id}>
            <TrendingMoviesListItem
              trendingMovie={trendingMovie}
              getMovieId={getMovieId}
            />
          </li>
        ))}
      </ul>
    </>
  );
};

export default TrendingMoviesList;
