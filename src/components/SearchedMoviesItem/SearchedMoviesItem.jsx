import css from "./SearchedMoviesItem.module.css";
import noPosterAvailable from "../../assets/images/no_poster_available.jpg";

const SearchedMoviesItem = ({ movie }) => {
  const imgBaseURL = "https://image.tmdb.org/t/p/w185";

  return (
    <div className={css.movieCard}>
      <img
        src={
          movie.backdrop_path
            ? `${imgBaseURL}${movie.backdrop_path}`
            : noPosterAvailable
        }
        alt={movie.title}
        width={185}
        height={104}
        className={css.searchedMoviePoster}
      />
      <p className={css.movieName}>{movie.title}</p>
    </div>
  );
};

export default SearchedMoviesItem;
