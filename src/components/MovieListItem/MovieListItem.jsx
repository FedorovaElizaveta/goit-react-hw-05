import css from "./MovieListItem.module.css";
import noPosterAvailable from "../../assets/images/no_poster_available.jpg";

const MovieListItem = ({ movie }) => {
  const imgBasePath = "https://image.tmdb.org/t/p/w185";

  return (
    <div className={css.movieCard}>
      <img
        src={
          movie.backdrop_path
            ? `${imgBasePath}${movie.backdrop_path}`
            : noPosterAvailable
        }
        alt={movie.title}
        width={185}
        height={104}
        className={css.moviePoster}
      />
      <p className={css.movieTitle}>{movie.title}</p>
    </div>
  );
};

export default MovieListItem;
