import { useEffect, useState } from "react";
import {
  fetchMovieDetails,
  fetchMovieVideos,
  fetchSimilar,
  fetchTvShowSimilar,
  fetchTvShowDetails,
  fetchTvShowVideos
} from "../api/tmdb";

export const useMovieDetail = (id, type) => {
  const [movie, setMovie] = useState(null);
  const [trailerKey, setTrailerKey] = useState("");
  const [similar, setSimilar] = useState([]);

  useEffect(() => {
    const loadData = async () => {
      try {
        const details =
          type === "movie"
            ? await fetchMovieDetails(id)
            : await fetchTvShowDetails(id);

        setMovie(details.data);

        const similarRes =
          type === "movie"
            ? await fetchSimilar(id)
            : await fetchTvShowSimilar(id);

        setSimilar(similarRes.data.results);

        const videos =
          type === "movie"
            ? await fetchMovieVideos(id)
            : await fetchTvShowVideos(id);

        const trailer = videos.data.results.find(
          (v) => v.site === "YouTube" && v.type === "Trailer"
        );

        if (trailer) setTrailerKey(trailer.key);
      } catch (err) {
        console.error(err);
      }
    };

    loadData();
  }, [id, type]);

  return { movie, trailerKey, similar };
};

