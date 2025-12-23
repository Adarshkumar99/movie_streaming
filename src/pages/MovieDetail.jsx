import { useParams } from "react-router-dom";
import Header from "../components/Header";
import { useMovieDetail } from "../hooks/useMovieDetail";
import MovieRow from "../components/MovieRow"
import Footer from "../components/Footer";


const MovieDetail = () => {
  const { id } = useParams();
  const { movie, trailerKey, similar } = useMovieDetail(id);

  if (!movie) return null;

  return (
    <>
      <Header />

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
          </div>
        </div>
      </div>
      <MovieRow title="Similar" movies={similar} />
      <Footer />
    </>
  );
};

export default MovieDetail;
