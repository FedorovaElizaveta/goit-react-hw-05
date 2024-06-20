import css from "./TrendingMoviesListItem.module.css";

const TrendingMoviesListItem = ({ trendingMovie }) => {
  const imgBasePath = "https://image.tmdb.org/t/p/w185";

  return (
    <div className={css.trendingMovieCard}>
      <img
        src={`${imgBasePath}${trendingMovie.backdrop_path}`}
        alt={trendingMovie.title}
      />
      <p className={css.trendingMovieName}>{trendingMovie.title}</p>
    </div>
  );
};

export default TrendingMoviesListItem;
