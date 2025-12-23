import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const Header = () => {
  const [isBlack, setIsBlack] = useState(false);
  const [query, setQuery] = useState("");

  const navigate = useNavigate();

  const QuerySearch = (e) => {
    e.preventDefault();

    if (!query.trim()) return;
    navigate(`/search?q=${query}`);
    setQuery("");
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsBlack(window.scrollY > 80);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`
        fixed top-0 w-full z-50
        transition-colors duration-500
        ${isBlack ? "bg-black" : "bg-transparent"}
      `}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="text-red-600 text-2xl font-bold mx-20 cursor-pointer">
            NETFLIX
          </Link>

          {/* SEARCH */}
          <form onSubmit={QuerySearch} className="relative">
            <input
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search"
              className="
      bg-black/30 text-white
      placeholder-gray-400
      px-4 py-2
      rounded-full
      border border-gray-600
      focus:outline-none
    "
            />

            {/* CLICKABLE SEARCH ICON */}
            <button
              type="submit"
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white cursor-pointer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m21 21-3.5-3.5M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z"
                />
              </svg>
            </button>
          </form>

        </div>
      </div>
    </nav>
  );
};

export default Header;
