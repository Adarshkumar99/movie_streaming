import axios from "axios";
import { Movie, MovieDetails } from "../types/Movie";

const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
export const api = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  params: {
    api_key: API_KEY,
    language: "en-US",
  },
});

export const IMG_URL = "https://image.tmdb.org/t/p/original";

export async function fetchMovies(type: string): Promise<Movie[]> {
  const response = await api.get(type);
  return response.data.results;
}

export async function fetchMovieDetails(id: string): Promise<MovieDetails> {
  const response = await api.get(`/movie/${id}`, {
    params: {
      append_to_response: "videos,credits",
    },
  });
  return response.data;
}


export async function fetchSimilar(id: string): Promise<Movie[]> {
  const response = await api.get(`/movie/${id}/similar`);
  return response.data.results;
}

export async function searchMovies(query: string): Promise<Movie[]> {
  const response = await api.get("/search/movie",
    {
      params: { query },
    }
  );

  return response.data.results;
}



// TV SHOWS


export async function fetchTvShows(type: string): Promise<Movie[]> {
  const response = await api.get(`/tv/${type}`);
  return response.data.results;
}

export async function fetchTvShowDetails(id: string): Promise<MovieDetails> {
  const response = await api.get(`/tv/${id}`, {
    params: { append_to_response: "videos,credits", },
  });

  return response.data;
}


export async function fetchTvShowSimilar(id: string): Promise<Movie[]> {
  const response = await api.get(`/tv/${id}/similar`);
  return response.data.results;
}

