import css from "./MovieList.module.css";
import { Link, useLocation } from "react-router-dom";
import MovieListItem from "../MovieListItem/MovieListItem";

const MovieList = ({ movies }) => {
  const location = useLocation();

  return (
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
  );
};

export default MovieList;
