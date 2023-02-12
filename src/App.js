import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Movies from "./pages/Movies";
import TvPrograms from "./pages/TvPrograms";
import PopularMovies from "./pages/PopularMovies";
import NotFound from "./pages/NotFound";
import Header from "./components/Header"
import MovieDetail from "./pages/MovieDetail"


function App() {
  return (
    <div className="app_wrap">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/nowplayingmovie" element={<Movies />} />
          <Route path="/nowplayingmovie/:title" element={<MovieDetail />} />
          <Route path="/tvprogram" element={<TvPrograms />} />
          <Route path="/tvprogram/:title" element={<MovieDetail />} />
          <Route path="/popularmovie" element={<PopularMovies />} />
          <Route path="/popularmovie/:title" element={<MovieDetail />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
