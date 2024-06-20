import css from "./NoCreditsOrReviews.module.css";

const NoCreditsOrReviews = ({ element }) => {
  return <p className={css.errorMessage}>There is no {element} here...</p>;
};

export default NoCreditsOrReviews;
