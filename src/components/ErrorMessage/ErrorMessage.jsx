import css from "./ErrorMessage.module.css";

const ErrorMessage = () => {
  return <p className={css.errorMessage}>Oops! Something went wrong...</p>;
};

export default ErrorMessage;
