import { useEffect, useState } from "react";
import {
  fetchMovies,
  fetchMovieVideos,
  fetchTrendingDay,
  fetchTrendingWeek,
  fetchTvShows
} from "../api/tmdb";

export const useHomeData = () => {
  const [heroMovie, setHeroMovie] = useState(null);
  const [trailerKey, setTrailerKey] = useState("");
  const [popular, setPopular] = useState([]);
  const [topRated, setTopRated] = useState([]);
  const [upcoming, setUpcoming] = useState([]);
  const [moviesDay, setDay] = useState([]);
  const [moviesWeek, setWeek] = useState([]);
  const [tvPopular, setTvPopular] = useState([]);
  const [tvTopRated, setTvTopRated] = useState([]);
  const [tvShows, setTvShows] = useState([]);
  const [tvAirShow, setTvAirShow] = useState([]);
  const [heroTvshow, setHeroTvShow] = useState(null);
  const [muted, setMuted] = useState(true)

  useEffect(() => {
    const loadData = async () => {
      try {
        const [pop, top, up, day, week, tvPop, tvTop, tv_On, tv_Air] = await Promise.all([
          fetchMovies('popular'),
          fetchMovies('top_rated'),
          fetchMovies('upcoming'),
          fetchTrendingDay(),
          fetchTrendingWeek(),
          fetchTvShows('top_rated'),
          fetchTvShows('top_rated'),
          fetchTvShows('on_the_air'),
          fetchTvShows('airing_today')

        ]);

        setPopular(pop.data.results);
        setTopRated(top.data.results);
        setUpcoming(up.data.results);
        setDay(day.data.results);
        setWeek(week.data.results);
        setTvPopular(tvPop.data.results);
        setTvTopRated(tvTop.data.results);
        setTvShows(tv_On.data.results);
        setTvAirShow(tv_Air.data.results);

        // trailer
        const hero =
          pop.data.results[
          Math.floor(Math.random() * pop.data.results.length)
          ];
        setHeroMovie(hero);

        const BannerTvShow =
          tvPop.data.results[
          Math.floor(Math.random() * tvPop.data.results.length)
          ];
        setHeroTvShow(BannerTvShow);

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

  return { heroMovie, trailerKey, popular, topRated, upcoming, moviesDay, moviesWeek, tvPopular, tvTopRated, tvShows, tvAirShow, heroTvshow, muted, setMuted };
};
