import { useEffect, useState } from "react";
import {
  fetchMovieDetails,
  fetchSimilar,
  fetchTvShowSimilar,
  fetchTvShowDetails
} from "../api/tmdb";
import { Movie, MovieDetails } from "../types/Movie";

export const useMovieDetail = (id: string, type: string) => {
  const [movie, setMovie] = useState<MovieDetails | null>(null);
  const [trailerKey, setTrailerKey] = useState<string>("");
  const [similar, setSimilar] = useState<Movie[]>([]);

  useEffect(() => {
    const loadData = async () => {
      try {
        const details =
          type === "movie"
            ? await fetchMovieDetails(id.toString())
            : await fetchTvShowDetails(id.toString());

        setMovie(details);

        const similarRes =
          type === "movie"
            ? await fetchSimilar(id.toString())
            : await fetchTvShowSimilar(id.toString());

        setSimilar(similarRes);


        const trailer = details.videos.results.find(
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

