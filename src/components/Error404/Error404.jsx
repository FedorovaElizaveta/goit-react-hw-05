import { Link } from "react-router-dom";
import css from "./Error404.module.css";

const Error404 = () => {
  return (
    <div className={css.errorWrapper}>
      <p className={css.errorCode}>404</p>
      <p className={css.errorText}>Oops! There is nothing here...</p>
      <p className={css.errorInfo}>
        ...the page you are looking for is not found or never existed
      </p>
      <Link to={"/"} className={css.goHomeLink}>
        Back to home
      </Link>
    </div>
  );
};

export default Error404;
