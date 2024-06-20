import css from "./SearchedMovies.module.css";
import { Link, useLocation } from "react-router-dom";
import SearchedMoviesItem from "../SearchedMoviesItem/SearchedMoviesItem";

const SearchedMovies = ({ movies }) => {
  const location = useLocation();

  return (
    <div className={css.moviesListWrapper}>
      <ul className={css.moviesList}>
        {movies.map((movie) => (
          <li key={movie.id}>
            <Link
              to={`/movies/${movie.id}`}
              state={{ from: location }}
              className={css.movieLink}
            >
              <SearchedMoviesItem movie={movie} />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SearchedMovies;
