import { Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import { Suspense, lazy } from "react";

const HomePage = lazy(() => import("./pages/HomePage"));
const Movies = lazy(() => import("./pages/Movies"));
const Error404 = lazy(() => import("./components/Error404/Error404"));

function App() {
  return (
    <>
      <NavBar />
      <Suspense fallback={null}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="*" element={<Error404 />}></Route>
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
