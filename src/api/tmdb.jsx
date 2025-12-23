import axios from "axios";

const API_KEY = import.meta.env.VITE_TMDB_API_KEY;

export const api = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  params: {
    api_key: API_KEY,
    language: "en-US",
  },
});

export const IMG_URL = "https://image.tmdb.org/t/p/original";

export const fetchPopular = () => api.get("/movie/popular");
export const fetchTopRated = () => api.get("/movie/top_rated");
export const fetchUpcoming = () => api.get("/movie/upcoming");
export const fetchTrendingDay = () => api.get("trending/movie/day");
export const fetchTrendingWeek = () => api.get("trending/movie/week");
export const fetchMovieVideos = (id) => api.get(`/movie/${id}/videos`);
export const fetchMovieDetails = (id) => api.get(`/movie/${id}`);
export const fetchSimilar = (id) => api.get(`/movie/${id}/similar`);
export const searchMovies = (query) => api.get("/search/movie", {
  params: { query },
});
