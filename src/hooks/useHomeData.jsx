import { useEffect, useState } from "react";
import {
  fetchPopular,
  fetchTopRated,
  fetchUpcoming,
  fetchMovieVideos,
  fetchTrendingDay,
  fetchTrendingWeek
} from "../api/tmdb";

export const useHomeData = () => {
  const [heroMovie, setHeroMovie] = useState(null);
  const [trailerKey, setTrailerKey] = useState("");
  const [popular, setPopular] = useState([]);
  const [topRated, setTopRated] = useState([]);
  const [upcoming, setUpcoming] = useState([]);
  const [moviesDay, setDay] = useState([]);
  const [moviesWeek, setWeek] = useState([]);

  useEffect(() => {
    const loadData = async () => {
      try {
        const [pop, top, up, day, week] = await Promise.all([
          fetchPopular(),
          fetchTopRated(),
          fetchUpcoming(),
          fetchTrendingDay(),
          fetchTrendingWeek(),

        ]);

        setPopular(pop.data.results);
        setTopRated(top.data.results);
        setUpcoming(up.data.results);
        setDay(day.data.results);
        setWeek(week.data.results);

        // trailer
        const hero =
          pop.data.results[
          Math.floor(Math.random() * pop.data.results.length)
          ];
        setHeroMovie(hero);

        const videoRes = await fetchMovieVideos(hero.id);
        const trailer = videoRes.data.results.find(
          (v) => v.type === "Trailer" && v.site === "YouTube"
        );

        if (trailer) setTrailerKey(trailer.key);
      } catch (err) {
        console.error(err);
      }
    };

    loadData();
  }, []);

  return { heroMovie, trailerKey, popular, topRated, upcoming, moviesDay, moviesWeek };
};
