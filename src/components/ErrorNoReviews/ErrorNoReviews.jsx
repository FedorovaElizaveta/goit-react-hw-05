import css from "./ErrorNoReviews.module.css";

const ErrorNoReviews = () => {
  return (
    <p className={css.errorMessage}>Looks like there is no reviews here...</p>
  );
};

export default ErrorNoReviews;
