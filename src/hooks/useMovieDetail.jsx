import { useEffect, useState } from "react";
import {
  fetchMovieDetails,
  fetchMovieVideos,
  fetchSimilar,
} from "../api/tmdb";

export const useMovieDetail = (id) => {
  const [movie, setMovie] = useState(null);
  const [trailerKey, setTrailerKey] = useState("");
  const [similar, setSimilar] = useState([]);

  useEffect(() => {
    const loadMovie = async () => {
      try {
        const movieRes = await fetchMovieDetails(id);
        setMovie(movieRes.data);

        const top = await fetchSimilar(id);
        setSimilar(top.data.results);

        const videoRes = await fetchMovieVideos(id);
        const trailer = videoRes.data.results.find(
          (v) => v.site === "YouTube" && v.type === "Trailer"
        );

        if (trailer) setTrailerKey(trailer.key);
      } catch (err) {
        console.error(err);
      }
    };

    loadMovie();
  }, [id]);

  return { movie, trailerKey, similar };
};
