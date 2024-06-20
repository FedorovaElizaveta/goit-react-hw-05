import css from "./ErrorNoMovies.module.css";

const ErrorNoMovies = ({ children }) => {
  return <p className={css.errorNoMovies}>{children}</p>;
};

export default ErrorNoMovies;
