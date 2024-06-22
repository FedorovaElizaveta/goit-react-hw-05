import { Route, Routes } from "react-router-dom";
import Navigation from "./components/Navigation/Navigation";
import { Suspense, lazy } from "react";

const HomePage = lazy(() => import("./pages/HomePage"));
const MoviesPage = lazy(() => import("./pages/MoviesPage"));
const MovieDetails = lazy(() =>
  import("./components/MovieDetails/MovieDetails")
);
const MovieCredits = lazy(() =>
  import("./components/MovieCredits/MovieCredits")
);
const MovieReviews = lazy(() =>
  import("./components/MovieReviews/MovieReviews")
);
const Error404 = lazy(() => import("./components/Error404/Error404"));

function App() {
  return (
    <>
      <Navigation />
      <Suspense fallback={null}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/movies" element={<MoviesPage />} />
          <Route path="/movies/:movieId" element={<MovieDetails />}>
            <Route path="credits" element={<MovieCredits />} />
            <Route path="reviews" element={<MovieReviews />} />
          </Route>
          <Route path="*" element={<Error404 />} />
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
