import css from "./MovieCast.module.css";
import clsx from "clsx";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import getMovieCast from "../../api/movie-cast";
import Loader from "../Loader/Loader";
import noUserImage from "../../assets/images/no-user-photo.jpg";
import Message from "../Message/Message";

const MovieCast = () => {
  const { movieId } = useParams();
  const [movieCast, setMovieCast] = useState({});
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
        const data = await getMovieCast(movieId);
        setMovieCast(data);
        {
          data.cast.length === 0 && setErrorNoCast(true);
        }
      } catch (error) {
        setError(true);
      } finally {
        setIsLoading(false);
      }
    };
    if (movieId) {
      fetchData();
    }
  }, [movieId]);

  return (
    <div>
      {error && <Message position="middle">Something went wrong...</Message>}

      {errorNoCast && <Message position="middle">No cast info here...</Message>}

      {isLoading && <Loader />}

      {Object.keys(movieCast).length > 0 && (
        <ul className={css.castList}>
          {movieCast.cast?.map((actor) => (
            <li className={css.castListItem} key={actor.id}>
              <img
                src={
                  actor.profile_path
                    ? `${actorImgBaseURL}${actor.profile_path}`
                    : noUserImage
                }
                alt={actor.name}
                className={css.castImg}
              />

              <div className={css.castListInfoWrapper}>
                {actor.name ? (
                  <p
                    className={clsx(
                      css.castListInfoNameAndRole,
                      css.castListInfoName
                    )}
                  >
                    {actor.name}
                  </p>
                ) : (
                  <Message element="actorName">No name info</Message>
                )}

                {actor.character ? (
                  <p className={css.castListInfoNameAndRole}>
                    {actor.character}
                  </p>
                ) : (
                  <Message>No character info</Message>
                )}
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default MovieCast;
