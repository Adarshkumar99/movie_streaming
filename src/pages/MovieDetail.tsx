import { useParams } from "react-router-dom";
import { useMovieDetail } from "../hooks/useMovieDetail";
import MovieRow from "../components/MovieRow"
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useFavourites } from "../context/FavouritesContext";


const MovieDetail = () => {
  const { id, type } = useParams<{ id: string, type: "movie" | "tv" }>();
  const { t } = useTranslation();
  if (!id || !type) return null;
  const { movie, trailerKey, similar } = useMovieDetail(id, type);
  const { isFavourite, addToFavourites, removeFromFavourites } = useFavourites();


  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [id, type]);


  if (!movie) return null;

  const handleFavourite = () => {
    if (isFavourite(movie.id)) {
      removeFromFavourites(movie.id)
    } else {
      addToFavourites(movie)
    }
  }

  return (
    <>

      {/* TRAILER */}
      <section className="relative h-[90vh] overflow-hidden">
        {trailerKey && (
          <iframe
            className="absolute inset-0 w-full h-full pt-20 scale-100"
            src={`https://www.youtube.com/embed/${trailerKey}?autoplay=1&mute=1&controls=1&loop=1&playlist=${trailerKey}&modestbranding=1&rel=0`}
            allow="autoplay; fullscreen"
            allowFullScreen
          />


        )}
      </section>

      {/* DETAILS */}
      <div className="pt-10 px-16 max-w-4xl">
        <h1 className="text-4xl font-bold mb-4">{movie.title}</h1>
        <p className="text-white/80 mb-6">{movie.overview}</p>

        <p className="text-sm text-white/60">
          Release: {movie.release_date} ⭐ {movie.vote_average}
        </p>

        <div>
          <h2 className="text-lg font-semibold mb-2">
            Genres
          </h2>
          <div className="flex gap-3 flex-wrap">
            {movie.genres.map((genre) => (
              <span
                key={genre.id}
                className="border border-white/30 px-3 py-1 rounded-full text-sm text-white/80"
              >
                {genre.name}
              </span>
            ))}

            <button className="inline" onClick={handleFavourite}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="24"
                height="24"
                fill={isFavourite(movie.id) ? "red" : "none"}
                stroke={isFavourite(movie.id) ? "red" : "white"}
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="transition-colors duration-300"
              >
                <path d="M21 8.25c0-2.485-2.099-4.5-4.687-4.5c-1.936 0-3.598 1.126-4.313 2.733c-.715-1.607-2.377-2.733-4.312-2.733C5.098 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12" />
              </svg>
            </button>
          </div>

        </div>
      </div>
      <MovieRow title={t('homepage.movie_detail.similar')} movies={similar} mediaType={type} />
    </>
  );
};

export default MovieDetail;
