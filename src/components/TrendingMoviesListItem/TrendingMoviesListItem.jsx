import css from "./TrendingMoviesListItem.module.css";
import noPosterAvailable from "../../assets/images/no_poster_available.jpg";

const TrendingMoviesListItem = ({ trendingMovie }) => {
  const imgBasePath = "https://image.tmdb.org/t/p/w185";

  return (
    <div className={css.trendingMovieCard}>
      <img
        src={
          trendingMovie.backdrop_path
            ? `${imgBasePath}${trendingMovie.backdrop_path}`
            : noPosterAvailable
        }
        alt={trendingMovie.title}
        width={185}
        height={104}
        className={css.trendingMovieImg}
      />
      <p className={css.trendingMovieName}>{trendingMovie.title}</p>
    </div>
  );
};

export default TrendingMoviesListItem;
