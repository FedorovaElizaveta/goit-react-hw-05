import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import getMovieReviews from "../../api/movie-reviews";
import Loader from "../Loader/Loader";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import ErrorNoReviews from "../ErrorNoReviews/ErrorNoReviews";
import css from "./MovieReviews.module.css";

const MovieReviews = () => {
  const { moviesId } = useParams();
  const [movieReviews, setMovieReviews] = useState({});
  const [error, setError] = useState(false);
  const [errorNoReviews, setErrorNoReviews] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setError(false);
        setErrorNoReviews(false);
        setIsLoading(true);
        const data = await getMovieReviews(moviesId);
        setMovieReviews(data);
        console.log(data);
        {
          data.results.length === 0 && setErrorNoReviews(true);
        }
      } catch (error) {
        setError(true);
      } finally {
        setIsLoading(false);
      }
    };
    if (moviesId) {
      fetchData();
    }
  }, [moviesId]);

  return (
    <div>
      {error && <ErrorMessage />}
      {errorNoReviews && <ErrorNoReviews />}
      {isLoading && <Loader />}
      {Object.keys(movieReviews).length > 0 && (
        <ul className={css.reviewsList}>
          {movieReviews.results?.map((result) => (
            <li key={result.id}>
              <h3>{result.author}</h3>
              <p>{result.content}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default MovieReviews;
