import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import './App.css'
import MovieDetail from "./pages/MovieDetail";
import Search from "./pages/Search";
import TvShows from "./pages/TvShows";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-black text-white">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movie/:id" element={<MovieDetail />} />
          <Route path="/search" element={<Search />} />
          <Route path="/genre/tv_shows" element={<TvShows />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
