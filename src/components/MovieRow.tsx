import { useNavigate } from "react-router-dom";
import { IMG_URL } from "../api/tmdb";
import { useRef } from "react";
import { Movie } from "../types/Movie";

type MoviewRowProps = {
  title: string;
  movies: Movie[];
  isFirstRow?: boolean;
  searching?: boolean;
  mediaType: "movie" | "tv";
}

const MovieRow = ({ title, movies, isFirstRow = false, searching = false, mediaType }: MoviewRowProps) => {
  const navigate = useNavigate();
  const rowRef = useRef<HTMLDivElement | null>(null);

  const scrollLeft = () => {
    rowRef.current?.scrollBy({ left: -600, behavior: "smooth" });
  };

  const scrollRight = () => {
    rowRef.current?.scrollBy({ left: 600, behavior: "smooth" });
  };

  return (
    <section className={`${isFirstRow ? "-mt-30 relative z-20" : "mt-7"} group`}>
      <p className="mx-16 text-xl font-semibold mb-4">{title}</p>

      <div className="relative">

        {/* ⬅️ LEFT ARROW */}
        <button onClick={scrollLeft} className=" hidden md:flex absolute left-0 top-0 bottom-0 z-30 w-14
        items-center justify-center bg-black/60 opacity-0 group-hover:opacity-100 transition">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="white"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-6 h-6"
          >
            <path d="M15 18l-6-6 6-6" />
          </svg>
        </button>

        {/* MOVIE ROW */}
        <div ref={rowRef} className="mx-12 flex gap-4 overflow-x-scroll scroll-smooth [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {movies.map((m) => (
            <div
              key={m.id}
              onClick={() => navigate(`/${mediaType}/${m.id}`)}
              className="min-w-[200px] cursor-pointer"
            >
              <img
                src={`${IMG_URL}${m.poster_path}`}
                alt={m.title}
                className="w-full h-72 object-cover rounded transition-transform duration-300 hover:scale-105"
              />
            </div>
          ))}
        </div>

        {/* ➡️ RIGHT ARROW */}
        <button onClick={scrollRight} className="hidden md:flex absolute right-0 top-0 bottom-0 z-30 w-14
        items-center justify-center bg-black/60 opacity-0 group-hover:opacity-100 transition">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="white"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-6 h-6"
          >
            <path d="M9 18l6-6-6-6" />
          </svg>
        </button>

      </div>
    </section>

  );
};

export default MovieRow;
