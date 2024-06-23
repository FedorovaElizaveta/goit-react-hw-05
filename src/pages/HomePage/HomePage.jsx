import css from "./HomePage.module.css";
import { useEffect, useState } from "react";
import getTrendingMovies from "../../api/trending-movies";
import MoviesList from "../../components/MovieList/MovieList";
import Loader from "../../components/Loader/Loader";
import Message from "../../components/Message/Message";

const HomePage = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);
  const [error, setError] = useState(false);
  const [errorNoMovies, setErrorNoMovies] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setError(false);
        setErrorNoMovies(false);
        setIsLoading(true);
        const data = await getTrendingMovies();
        setTrendingMovies(data.results);
        {
          data.results.length === 0 && setErrorNoMovies(true);
        }
      } catch (error) {
        setError(true);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      {error && (
        <Message position="middle">Oops! Something went wrong...</Message>
      )}
      {errorNoMovies && (
        <Message position="middle">
          Sorry, looks like there is no movies now...
        </Message>
      )}
      {isLoading && <Loader />}

      {trendingMovies.length > 0 && (
        <div className={css.movieListContainer}>
          <h2 className={css.movieTitle}>Trending Movies</h2>{" "}
          <MoviesList movies={trendingMovies} />
        </div>
      )}
    </>
  );
};

export default HomePage;
