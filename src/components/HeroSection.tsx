import { IMG_URL } from "../api/tmdb";
import { Link } from "react-router-dom";
import { Movie } from "../types/Movie";
import { Dispatch, SetStateAction } from "react";
import { useTranslation } from "react-i18next";

type HeroSectionProps = {
  heroMovie: Movie | null;
  trailerKey: string;
  muted: boolean;
  setMuted: Dispatch<SetStateAction<boolean>>;
};
const HeroSection = ({ heroMovie, trailerKey, muted, setMuted }: HeroSectionProps) => {
  if (!heroMovie) return null;

  const { t } = useTranslation();

  return (
    <section className="relative h-[100vh] w-full overflow-hidden no-scrollbar">
      <div className="absolute inset-0">
        {/* Video / Image */}
        {trailerKey ? (
          <div className="relative w-full h-full">
            <iframe
              className="w-full h-full scale-150"
              src={`https://www.youtube.com/embed/${trailerKey}?autoplay=1&mute=${muted ? 1 : 0}&controls=0&loop=1&playlist=${trailerKey}`}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        ) : (
          <img
            src={`${IMG_URL}${heroMovie.backdrop_path}`}
            alt={heroMovie.title}
            className="w-full h-full object-cover"
          />
        )}
        {/* Overlay */}
        <div className="absolute h-screen inset-0 bg-gradient-to-r from-black via-black/50 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 px-6 md:px-16 max-w-xl h-full flex flex-col justify-center">
        <h1 className="text-3xl md:text-5xl font-bold mb-4">
          {heroMovie.title}
        </h1>

        <p className="text-white/80 line-clamp-3 mb-6">
          {heroMovie.overview}
        </p>

        {/* HERO BUTTONS */}
        <div className="flex gap-4">
          <Link to={`movie/${heroMovie.id}`}>
            <button className="bg-white text-black px-6 py-2 rounded font-semibold hover:bg-white/80">
              {t('homepage.play')}
            </button>


            <button className="bg-gray-500/70 text-white px-6 py-2 rounded font-semibold hover:bg-gray-500/50 mx-4">
              {t('homepage.more_info')}
            </button>
          </Link>

        </div>
      </div>

      {/* VOLUME BUTTON */}
      <button onClick={() => setMuted(prev => !prev)} className="absolute right-6 bottom-60 z-30 w-12 h-12
    flex items-center justify-center rounded-full border border-white/80 bg-black/20 backdrop-blur-sm
    hover:bg-black/40 transition">
        {muted ? (
          // 🔇 Muted icon
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor"
            strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-white">
            {/* Speaker */}
            <path d="M11 5L6 9H3v6h3l5 4V5z" />

            {/* Slash */}
            <path d="M16 9l4 4" />
            <path d="M20 9l-4 4" />
          </svg>

        ) : (
          // 🔊 Volume icon
          <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-white" fill="none"
            viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
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
