import { useEffect, useState } from "react";
import {
  fetchMovieDetails,
  fetchMovies,
  fetchTvShows
} from "../api/tmdb";
import { Movie } from "../types/Movie";

export const useHomeData = () => {

  const [heroMovie, setHeroMovie] = useState<Movie | null>(null);
  const [heroTvshow, setHeroTvShow] = useState<Movie | null>(null);

  const [trailerKey, setTrailerKey] = useState<string>("");

  const [popular, setPopular] = useState<Movie[]>([]);
  const [topRated, setTopRated] = useState<Movie[]>([]);
  const [upcoming, setUpcoming] = useState<Movie[]>([]);
  const [moviesDay, setDay] = useState<Movie[]>([]);
  const [moviesWeek, setWeek] = useState<Movie[]>([]);

  const [tvPopular, setTvPopular] = useState<Movie[]>([]);
  const [tvTopRated, setTvTopRated] = useState<Movie[]>([]);
  const [tvShows, setTvShows] = useState<Movie[]>([]);
  const [tvAirShow, setTvAirShow] = useState<Movie[]>([]);

  const [muted, setMuted] = useState<boolean>(true);

  useEffect(() => {
    const loadData = async () => {
      try {
        const [pop, top, up, day, week, tvPop, tvTop, tv_On, tv_Air] = await Promise.all([
          fetchMovies('/movie/popular'),
          fetchMovies('/movie/top_rated'),
          fetchMovies('/movie/upcoming'),
          fetchMovies('trending/movie/day'),
          fetchMovies('trending/movie/week'),
          fetchTvShows('top_rated'),
          fetchTvShows('top_rated'),
          fetchTvShows('on_the_air'),
          fetchTvShows('airing_today')

        ]);

        setPopular(pop);
        setTopRated(top);
        setUpcoming(up);
        setDay(day);
        setWeek(week);
        setTvPopular(tvPop);
        setTvTopRated(tvTop);
        setTvShows(tv_On);
        setTvAirShow(tv_Air);

        // trailer
        const hero = pop[Math.floor(Math.random() * pop.length)];
        setHeroMovie(hero);

        const BannerTvShow = tvPop[Math.floor(Math.random() * tvPop.length)];
        setHeroTvShow(BannerTvShow);

        const videoRes = await fetchMovieDetails(hero.id.toString());

        const trailer = videoRes.videos.results.find(
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
