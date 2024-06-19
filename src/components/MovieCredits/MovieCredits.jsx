import { useEffect, useState } from "react";
import getMovieCredits from "../../api/movie-credits";
import { useParams } from "react-router-dom";
import Loader from "../Loader/Loader";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import ErrorNoCast from "../ErrorNoCast/ErrorNoCast";
import css from "./MovieCredits.module.css";

const MovieCredits = () => {
  const { moviesId } = useParams();
  const [movieCredits, setMovieCredits] = useState({});
  const [error, setError] = useState(false);
  const [errorNoCast, setErrorNoCast] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const actorImgBaseURL = "https://image.tmdb.org/t/p/w185";

  useEffect(() => {
    const fetchData = async () => {
      try {
        setError(false);
        setErrorNoCast(false);
        setIsLoading(true);
        const data = await getMovieCredits(moviesId);
        setMovieCredits(data);
        {
          data.cast.length === 0 && setErrorNoCast(true);
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
      {errorNoCast && <ErrorNoCast />}
      {isLoading && <Loader />}
      {Object.keys(movieCredits).length > 0 && (
        <ul className={css.castList}>
          {movieCredits.cast?.map((actor) => (
            <li className={css.castListItem} key={actor.id}>
              <img
                src={`${actorImgBaseURL}${actor.profile_path}`}
                alt={actor.name}
                className={css.castImg}
              />
              <div className={css.castListInfoWrapper}>
                <p>{actor.name}</p>
                <p>{actor.character}</p>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default MovieCredits;
