import axios from "axios";

axios.defaults.baseURL = "https://api.themoviedb.org/3";

const getMovieReviews = async (id) => {
  const options = {
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkZWY0YzZjMDgyY2I2NGMzZjkzNzFiNDRjMjYwOGI2YyIsInN1YiI6IjY2NzFhOTNlMGUwZDk2ZDNiYTZhYjhjMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.TR5Kr67Rcp4OeWXkp5TwaVN6pWYfOl_etYbsQx7YXis",
    },
    params: {
      api_key: "def4c6c082cb64c3f9371b44c2608b6c",
    },
  };
  try {
    const { data } = await axios.get(`/movie/${id}/reviews`, options);
    return data;
  } catch (error) {
    console.error("Error fetching movie details:", error);
    alert("Sorry, something went wrong...");
    return null;
  }
};

export default getMovieReviews;
