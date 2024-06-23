import css from "./MoviesPage.module.css";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import SearchMovieInput from "../../components/SearchMovieInput/SearchMovieInput";
import MoviesList from "../../components/MovieList/MovieList";
import Loader from "../../components/Loader/Loader";
import getMovies from "../../api/search-movies";
import Message from "../../components/Message/Message";
import toast, { Toaster } from "react-hot-toast";

const MoviesPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState(searchParams.get("movie") || "");
  const [error, setError] = useState(false);
  const [errorNoMovies, setErrorNoMovies] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      if (!query) return;

      try {
        setError(false);
        setErrorNoMovies(false);
        setIsLoading(true);
        const data = await getMovies({ query });
        setMovies(data.results);
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
  }, [query]);

  const handleSearch = (searchQuery) => {
    {
      searchQuery === "" &&
        toast("Please, fill the field", {
          style: {
            borderRadius: "30px",
            background: "#090a1f",
            color: "#fff",
            boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
          },
        });
    }
    setQuery(searchQuery);
    setSearchParams({ movie: searchQuery });
  };

  return (
    <div>
      <div>
        <Toaster />
      </div>

      <SearchMovieInput onSearch={handleSearch} query={query} />
      {error && <Message position="middle">Something went wrong...</Message>}
      {errorNoMovies && (
        <Message position="middle">
          There are no movies on your request...
        </Message>
      )}
      {isLoading && <Loader />}
      {movies.length > 0 && (
        <div className={css.movieListContainer}>
          <MoviesList movies={movies} />
        </div>
      )}
    </div>
  );
};

export default MoviesPage;
