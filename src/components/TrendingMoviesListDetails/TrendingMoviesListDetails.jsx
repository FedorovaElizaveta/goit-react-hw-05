import { useEffect, useRef, useState } from "react";
import getTrendingMovieDetails from "../../api/movie-details";
import { Link, Outlet, useLocation, useParams } from "react-router-dom";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import Loader from "../Loader/Loader";
import css from "./TrendingMoviesListDetails.module.css";
import NoElementMessage from "../NoElementMessage/NoElementMessage";

const TrendingMoviesListDetails = () => {
  const { moviesId } = useParams();
  const [movie, setMovie] = useState({});
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const imageUrl = `https://image.tmdb.org/t/p/w342${movie.poster_path}`;
  const releaseDate = movie.release_date?.slice(0, 4) ?? "";
  const genres = movie.genres?.map((genre) => genre.name).join(", ") ?? "";

  const location = useLocation();

  const backLocation = useRef(location.state ?? "/");

  useEffect(() => {
    const fetchData = async () => {
      try {
        setError(false);
        setIsLoading(true);
        const data = await getTrendingMovieDetails(moviesId);
        setMovie(data);
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
    <div className={css.moviesDetailsList}>
      <Link to={backLocation.current} className={css.backBtn}>
        Go back
      </Link>
      {error && <ErrorMessage />}
      {isLoading && <Loader />}
      {Object.keys(movie).length > 0 && (
        <div>
          <div className={css.movieInfoWrapper}>
            <img src={imageUrl} alt={movie.title} width={342} height={513} />
            <div className={css.movieInfo}>
              <h2 className={css.movieDetailsHeadings}>
                {movie.title} ({releaseDate})
              </h2>
              <p>User Score: {movie.vote_average}</p>
              <h3 className={css.movieDetailsHeadings}>Overview</h3>
              {movie.overview ? (
                <p>{movie.overview}</p>
              ) : (
                <NoElementMessage element="overview" />
              )}
              <h3 className={css.movieDetailsHeadings}>Genres</h3>
              {genres ? <p>{genres}</p> : <NoElementMessage element="genres" />}
            </div>
          </div>
          <div className={css.movieCreditsAndReviews}>
            <p>Additional information</p>
            <ul className={css.movieCreditsAndReviewsList}>
              <li>
                <Link to="credits" className={css.creditsAndReviewsLink}>
                  Credits
                </Link>
              </li>
              <li>
                <Link to="reviews" className={css.creditsAndReviewsLink}>
                  Reviews
                </Link>
              </li>
            </ul>
            <Outlet />
          </div>
        </div>
      )}
    </div>
  );
};

export default TrendingMoviesListDetails;
