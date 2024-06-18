import { useEffect, useState } from "react";
import getTrendingMovies from "../api/trending-movies";
import TrendingMoviesList from "../components/TrendingMoviesList/TrendingMoviesList";
import getTrendingMovieDetails from "../api/movie-details";

const HomePage = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);
  const [movie, setMovie] = useState([]);
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [movieId, setMovieId] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setError(false);
        setIsLoading(true);
        const data = await getTrendingMovies();
        setTrendingMovies(data.results);
      } catch (error) {
        setError(true);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);

  const getMovieId = (id) => {
    setMovieId(id);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        setError(false);
        setIsLoading(true);
        if (movieId !== null) {
          const data = await getTrendingMovieDetails(movieId);
          setMovie(data);
          console.log(data);
        }
      } catch (error) {
        setError(true);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, [movieId]);

  return (
    <>
      <TrendingMoviesList
        trendingMovies={trendingMovies}
        getMovieId={getMovieId}
      />
    </>
  );
};

export default HomePage;
