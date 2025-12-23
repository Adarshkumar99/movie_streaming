import { IMG_URL } from "../api/tmdb";
import { Link } from "react-router-dom";
const HeroSection = ({ heroMovie, trailerKey, muted, setMuted }) => {
  if (!heroMovie) return null;

  return (
    <section className="relative h-[100vh] overflow-visible">

      {/* Video / Image */}
      {trailerKey ? (
        <iframe
          className="absolute inset-0 w-full h-full scale-135"
          src={`https://www.youtube.com/embed/${trailerKey}?autoplay=1&mute=${muted ? 1 : 0}&controls=0&loop=1&playlist=${trailerKey}`}
          allow="autoplay"
        />
      ) : (
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${IMG_URL}${heroMovie.backdrop_path})`,
          }}
        />
      )}

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/60 to-transparent" />

      {/* Content */}
      <div className="relative z-10 px-16 max-w-xl h-full flex flex-col justify-center">
        <h1 className="text-5xl font-bold mb-4">
          {heroMovie.title}
        </h1>

        <p className="text-white/80 line-clamp-3 mb-6">
          {heroMovie.overview}
        </p>

        {/* HERO BUTTONS */}
        <div className="flex gap-4">
          <Link to={`movie/${heroMovie.id}`}>
            <button className="bg-white text-black px-6 py-2 rounded font-semibold hover:bg-white/80">
              ▶ Play
            </button>


            <button className="bg-gray-500/70 text-white px-6 py-2 rounded font-semibold hover:bg-gray-500/50 mx-4">
              ⓘ More Info
            </button>
          </Link>

        </div>
      </div>

      {/* VOLUME BUTTON */}
      <button
        onClick={() => setMuted(!muted)}
        className="
    absolute right-6 bottom-60 z-30
    w-12 h-12
    flex items-center justify-center
    rounded-full
    border border-white/80
    bg-black/20
    backdrop-blur-sm
    hover:bg-black/40
    transition
  "
      >
        {muted ? (
          // 🔇 Muted icon
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={1.8}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 9l6 6m0-6l-6 6M5 9v6h4l5 5V4l-5 5H5z"
            />
          </svg>
        ) : (
          // 🔊 Volume icon
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={1.8}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M11 5l-5 5H3v4h3l5 5V5zm4.5 2.5a6 6 0 010 9M17.5 5a9 9 0 010 14"
            />
          </svg>
        )}
      </button>

    </section >
  );
};

export default HeroSection;
