import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import getMovieReviews from "../../api/movie-reviews";
import Loader from "../Loader/Loader";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import NoCreditsOrReviews from "../NoCreditsOrReviews/NoCreditsOrReviews";
import noUserPhoto from "../../assets/images/no-user-photo.jpg";
import css from "./MovieReviews.module.css";

const MovieReviews = () => {
  const { moviesId } = useParams();
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
        const data = await getMovieReviews(moviesId);
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
    if (moviesId) {
      fetchData();
    }
  }, [moviesId]);

  return (
    <div>
      {error && <ErrorMessage />}
      {errorNoReviews && <NoCreditsOrReviews element="reviews" />}
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
