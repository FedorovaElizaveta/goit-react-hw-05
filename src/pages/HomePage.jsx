import { useEffect, useState } from "react";
import getTrendingMovies from "../api/trending-movies";
import TrendingMoviesList from "../components/TrendingMoviesList/TrendingMoviesList";
import ErrorMessage from "../components/ErrorMessage/ErrorMessage";
import Loader from "../components/Loader/Loader";
import ErrorNoMovies from "../components/ErrorNoMovies/ErrorNoMovies";

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
      {error && <ErrorMessage />}
      {errorNoMovies && <ErrorNoMovies />}
      {isLoading && <Loader />}
      {trendingMovies.length > 0 && (
        <TrendingMoviesList trendingMovies={trendingMovies} />
      )}
    </>
  );
};

export default HomePage;
