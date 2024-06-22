import css from "./MovieList.module.css";
import { Link, useLocation } from "react-router-dom";
import MovieListItem from "../MovieListItem/MovieListItem";

const MovieList = ({ movies, page }) => {
  const location = useLocation();

  return (
    <div className={css.movieListContainer}>
      {page === "home" && <h2 className={css.movieTitle}>Trending Movies</h2>}
      <ul className={css.movieList}>
        {movies.map((movie) => (
          <li key={movie.id}>
            <Link
              to={`/movies/${movie.id}`}
              state={{ from: location }}
              className={css.movieLink}
            >
              <MovieListItem movie={movie} />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MovieList;
