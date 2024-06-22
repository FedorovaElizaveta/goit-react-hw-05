import axios from "axios";

axios.defaults.baseURL = "https://api.themoviedb.org/3";

const getTrendingMovies = async () => {
  const options = {
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkZWY0YzZjMDgyY2I2NGMzZjkzNzFiNDRjMjYwOGI2YyIsInN1YiI6IjY2NzFhOTNlMGUwZDk2ZDNiYTZhYjhjMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.TR5Kr67Rcp4OeWXkp5TwaVN6pWYfOl_etYbsQx7YXis",
    },
  };

  try {
    const { data } = await axios.get("/trending/movie/day", options);
    return data;
  } catch (error) {
    console.error("Error fetching movies:", error);
    alert("Sorry, something went wrong...");
  }
  return null;
};

export default getTrendingMovies;
