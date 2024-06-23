import css from "./MovieReviews.module.css";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import getMovieReviews from "../../api/movie-reviews";
import Loader from "../Loader/Loader";
import noUserPhoto from "../../assets/images/no-user-photo.jpg";
import Message from "../Message/Message";

const MovieReviews = () => {
  const { movieId } = useParams();
  const [movieReviews, setMovieReviews] = useState({});
  const [error, setError] = useState(false);
  const [errorNoReviews, setErrorNoReviews] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const avatarImgBaseURL = "https://image.tmdb.org/t/p/original";

  useEffect(() => {
    const fetchData = async () => {
      try {
        setError(false);
        setErrorNoReviews(false);
        setIsLoading(true);
        const data = await getMovieReviews(movieId);
        setMovieReviews(data);
        {
          data.results.length === 0 && setErrorNoReviews(true);
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

      {errorNoReviews && (
        <Message position="middle">There are no reviews here...</Message>
      )}

      {isLoading && <Loader />}

      {Object.keys(movieReviews).length > 0 && (
        <ul className={css.reviewsList}>
          {movieReviews.results?.map((result) => (
            <li className={css.reviewsListItem} key={result.id}>
              <div className={css.authorAvatarAndNameWrapper}>
                <img
                  src={
                    result.author_details.avatar_path
                      ? `${avatarImgBaseURL}${result.author_details.avatar_path}`
                      : noUserPhoto
                  }
                  alt={result.author}
                  width={50}
                  height={50}
                  className={css.authorAvatar}
                />

                <h3>{result.author}</h3>
              </div>
              <p>{result.content}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default MovieReviews;
