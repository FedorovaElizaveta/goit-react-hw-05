import css from "./MoviesListDetails.module.css";
import { useEffect, useState } from "react";
import getTrendingMovieDetails from "../../api/movie-details";
import { Link, Outlet, useLocation, useParams } from "react-router-dom";
import Loader from "../Loader/Loader";
import Message from "../Message/Message";
import noPosterAvailable from "../../assets/images/no_poster_available.jpg";

const MoviesListDetails = () => {
  const { moviesId } = useParams();
  const [movie, setMovie] = useState({});
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const imageBaseUrl = "https://image.tmdb.org/t/p/w342";
  const releaseDate = movie.release_date?.slice(0, 4) ?? "";
  const genres = movie.genres?.map((genre) => genre.name).join(", ") ?? "";

  const location = useLocation();
  const backLocation = location.state?.from || "/";

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
      <Link to={backLocation} className={css.backBtn}>
        Go back
      </Link>

      {error && (
        <Message position="middle">Oops! Something went wrong...</Message>
      )}

      {isLoading && <Loader />}

      {Object.keys(movie).length > 0 && (
        <div>
          <div className={css.movieInfoWrapper}>
            <img
              src={
                movie.poster_path
                  ? `${imageBaseUrl}${movie.poster_path}`
                  : noPosterAvailable
              }
              alt={movie.title}
              width={342}
              height={513}
              className={css.moviePoster}
            />

            <div className={css.movieInfo}>
              <h2 className={css.movieDetailsHeadings}>
                {movie.title} ({releaseDate})
              </h2>

              <p>User Score: {movie.vote_average}</p>

              <h3 className={css.movieDetailsHeadings}>Overview</h3>

              {movie.overview ? (
                <p>{movie.overview}</p>
              ) : (
                <Message>No overview here...</Message>
              )}

              <h3 className={css.movieDetailsHeadings}>Genres</h3>

              {genres ? <p>{genres}</p> : <Message>No genres here...</Message>}
            </div>
          </div>

          <div className={css.movieCreditsAndReviews}>
            <p>Additional information</p>

            <ul className={css.movieCreditsAndReviewsList}>
              <li>
                <Link
                  to="credits"
                  state={{ from: backLocation }}
                  className={css.creditsAndReviewsLink}
                >
                  Credits
                </Link>
              </li>
              <li>
                <Link
                  to="reviews"
                  state={{ from: backLocation }}
                  className={css.creditsAndReviewsLink}
                >
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

export default MoviesListDetails;