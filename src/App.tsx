import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import './App.css'
import MovieDetail from "./pages/MovieDetail";
import Search from "./pages/Search";
import TvShows from "./pages/TvShows";
import Header from "./components/Header";
import Footer from "./components/Footer";
import FavoritesPage from "./pages/FavoritesPage";
import { FavouritesProvider } from "./context/FavouritesContext";

function App() {
  return (
    <BrowserRouter>
      <FavouritesProvider>
        <div className="min-h-screen bg-black text-white">
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/:type/:id" element={<MovieDetail />} />
            <Route path="/search" element={<Search />} />
            <Route path="/genre/tv_shows" element={<TvShows />} />
            <Route path="/favorites" element={<FavoritesPage />} />
          </Routes>
          <Footer />
        </div>
      </FavouritesProvider>
    </BrowserRouter>
  );
}

export default App;
