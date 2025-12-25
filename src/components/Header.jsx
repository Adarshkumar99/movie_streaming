import { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";

const Header = () => {
  const [isBlack, setIsBlack] = useState(false);
  const [query, setQuery] = useState("");
  const [openSearch, setOpenSearch] = useState(false);

  const navigate = useNavigate();

  const QuerySearch = (e) => {
    e.preventDefault();
    if (!query.trim()) return;

    navigate(`/search?q=${query}`);
    setQuery("");
    setOpenSearch(false);
  };

  useEffect(() => {
    const handleScroll = () => setIsBlack(window.scrollY > 80);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`
        fixed top-0 left-0 right-0
        z-50 overflow-hidden
        transition-colors duration-500
        ${isBlack || openSearch ? "bg-black" : "bg-transparent"}
      `}
    >
      <div className="max-w-7xl mx-auto px-4">
        {/* TOP ROW */}
        <div className="flex items-center justify-between h-16">

          {/* LOGO */}
          <Link
            to="/"
            className="text-red-600 text-2xl font-bold"
          >
            NETFLIX
          </Link>

          {/* DESKTOP SEARCH */}
          <form
            onSubmit={QuerySearch}
            className="relative hidden md:block"
          >
            <input
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search"
              className="
                bg-black/30 text-white
                px-4 py-2 pr-10
                rounded-full
                border border-gray-600
                focus:outline-none
              "
            />
            <button
              type="submit"
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white cursor-pointer"
            >
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

          {/* MOBILE ICONS */}
          <div className="flex items-center gap-4 md:hidden">
            {/* SEARCH ICON */}
            <button
              onClick={() => setOpenSearch(!openSearch)}
              className="text-white text-xl"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* MOBILE SEARCH BAR */}
        {openSearch && (
          <div className="md:hidden pb-4">
            <form onSubmit={QuerySearch}>
              <input
                type="search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search"
                className="
                  w-full
                  bg-black/30 text-white
                  px-4 py-2
                  rounded-full
                  border border-gray-600
                  focus:outline-none
                "
              />
            </form>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Header;
