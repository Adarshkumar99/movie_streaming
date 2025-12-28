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

export const fetchMovies = (type) => api.get(`/movie/${type}`);
export const fetchTrendingDay = () => api.get("trending/movie/day");
export const fetchTrendingWeek = () => api.get("trending/movie/week");
export const fetchMovieVideos = (id) => api.get(`/movie/${id}/videos`);
export const fetchMovieDetails = (id) => api.get(`/movie/${id}`);
export const fetchSimilar = (id) => api.get(`/movie/${id}/similar`);
export const searchMovies = (query) => api.get("/search/movie", {
  params: { query },
});


export const fetchTvShows = (type) => api.get(`/tv/${type}`);
export const fetchTvShowVideos = (id) => api.get(`/tv/${id}/videos`);
export const fetchTvShowDetails = (id) => api.get(`/tv/${id}`);
export const fetchTvShowSimilar = (id) => api.get(`/tv/${id}/similar`);
