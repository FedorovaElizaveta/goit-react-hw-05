import css from "./ErrorNoMovies.module.css";

const ErrorNoMovies = () => {
  return (
    <p className={css.errorNoMovies}>
      Sorry, looks like there is no movies now...
    </p>
  );
};

export default ErrorNoMovies;
