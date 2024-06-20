import css from "./SearchedMoviesItem.module.css";
import noUserPhoto from "../../assets/images/no-user-photo.jpg";

const SearchedMoviesItem = ({ movie }) => {
  const imgBaseURL = "https://image.tmdb.org/t/p/w185";

  return (
    <div className={css.movieCard}>
      <img
        src={
          movie.backdrop_path
            ? `${imgBaseURL}${movie.backdrop_path}`
            : noUserPhoto
        }
        alt={movie.title}
        width={185}
        height={104}
      />
      <p className={css.movieName}>{movie.title}</p>
    </div>
  );
};

export default SearchedMoviesItem;
