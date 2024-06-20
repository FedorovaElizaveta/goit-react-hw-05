import { useState } from "react";
import css from "./SearchMovieInput.module.css";

const SearchMovieInput = ({ onSearch, query }) => {
  const [userQuery, setUserQuery] = useState(query || "");

  const handleChange = (event) => {
    const inputValue = event.target.value;
    setUserQuery(inputValue);
  };

  const handleSubmit = () => {
    event.preventDefault();
    onSearch(userQuery);
  };

  return (
    <form onSubmit={handleSubmit} className={css.searchMovieForm}>
      <label htmlFor="movie">Find a movie by title:</label>
      <input
        type="text"
        id="movie"
        value={userQuery}
        onChange={handleChange}
        className={css.searchMovieFormInput}
      />
      <button type="submit" className={css.searchMovieFormBtn}>
        Search
      </button>
    </form>
  );
};

export default SearchMovieInput;
