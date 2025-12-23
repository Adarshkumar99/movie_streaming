import { useNavigate } from "react-router-dom";
import { IMG_URL } from "../api/tmdb";

const MovieRow = ({ title, movies, isFirstRow, searching }) => {
  const navigate = useNavigate();
  return (
    <section className={`${isFirstRow ? "-mt-30 relative z-20" : "mt-7"}`}>
      <p className="mx-16 text-xl font-semibold mb-4">{title}</p>
      <div className="mx-12 overflow-x-scroll [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        <div className={`flex gap-4 ${searching ? "flex-wrap" : ""}`} >
          {movies.map((m) => (
            <div key={m.id} onClick={() => navigate(`/movie/${m.id}`)} className="min-w-[200px]">
              <img
                src={`${IMG_URL}${m.poster_path}`}
                alt={m.title}
                className="w-full h-72 object-cover rounded"
              />
            </div>

          ))}
        </div>
      </div>
    </section >
  );
};

export default MovieRow;
