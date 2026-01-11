import { useEffect, useState } from "react";
import { useNavigate, NavLink, Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import i18n from "i18next";

const Header = () => {
  const [isBlack, setIsBlack] = useState<boolean>(false);
  const { t } = useTranslation();
  const [query, setQuery] = useState<string>("");
  const [openSearch, setOpenSearch] = useState<boolean>(false);

  const navigate = useNavigate();

  const QuerySearch = (e: any) => {
    e.preventDefault();
    if (!query.trim()) return;

    navigate(`/search?q=${query}`);
    setQuery("");
    setOpenSearch(false);
  };

  const changeLanguage = (lang: "en" | "hi" | "de") => {
    i18n.changeLanguage(lang);
    localStorage.setItem("lang", lang);
    window.location.reload();
  }

  useEffect(() => {
    const handleScroll = () => setIsBlack(window.scrollY > 80);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 overflow-hidden transition-colors duration-500
        ${isBlack || openSearch ? "bg-black" : "bg-transparent"}
      `}
    >
      <div className="max-w-7xl mx-auto px-2">
        <div className="flex items-center justify-between h-16">
          <div className="relative">
            <div className="flex items-center gap-8">
              {/* LOGO */}
              <Link
                to="/"
                className="text-red-600 text-2xl font-bold"
              >
                NETFLIX
              </Link>

              {/* DESKTOP LINKS */}
              <div className="md:flex items-center gap-6">
                <NavLink to="/" end className={({ isActive }) => isActive ? "text-white font-semibold mx-2"
                  : "text-gray-400 hover:text-gray-300 mx-2"}>{t('header.home')}
                </NavLink>

                <NavLink
                  to="/genre/tv_shows" className={({ isActive }) => isActive ? "text-white font-semibold" : "text-gray-400 hover:text-gray-300"}>
                  {t('header.show')}
                </NavLink>
              </div>

            </div>
          </div>

          {/* DESKTOP SEARCH */}
          <div className="flex">
            <form
              onSubmit={QuerySearch}
              className="relative hidden md:block"
            >
              <input
                type="search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder={t("header.search")}
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

            {/* language selector */}
            <div className="hidden md:block ml-4">
              <select onChange={(e) => changeLanguage(e.target.value as "en" | "hi" | "de")} defaultValue={localStorage.getItem("lang") || "en"}
                className=" bg-black/30 text-white border border-gray-600 px-3 py-2 rounded-full focus:outline-none cursor-pointer">
                <option value="en">En</option>
                <option value="hi">Hi</option>
                <option value="de">De</option>
              </select>
            </div>

            {/* favourites movies */}
            <Link to='/favorites' className="mx-2 mt-2 hidden md:block" >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="24"
                height="24"
                fill="none"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="transition-colors duration-300"
              >
                <path d="M21 8.25c0-2.485-2.099-4.5-4.687-4.5c-1.936 0-3.598 1.126-4.313 2.733c-.715-1.607-2.377-2.733-4.312-2.733C5.098 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12" />
              </svg>
            </Link>
          </div>


          {/* MOBILE ICONS */}
          <div className="flex items-center gap-4 md:hidden">

            <Link to='/favorites' className="mx-2 mt-2 md:hidden" >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="24"
                height="24"
                fill="none"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="transition-colors duration-300"
              >
                <path d="M21 8.25c0-2.485-2.099-4.5-4.687-4.5c-1.936 0-3.598 1.126-4.313 2.733c-.715-1.607-2.377-2.733-4.312-2.733C5.098 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12" />
              </svg>
            </Link>

            {/* mobile language selector */}
            <div className="md:hidden ml-2">
              <select onChange={(e) => changeLanguage(e.target.value as "en" | "hi" | "de")} defaultValue={localStorage.getItem("lang") || "en"}
                className=" bg-black/30 text-white border border-gray-600 px-3 py-2 rounded-full focus:outline-none cursor-pointer">
                <option value="en">English</option>
                <option value="hi">हिंदी</option>
                <option value="de">Deutsch</option>
              </select>
            </div>

            {/* SEARCH ICON */}
            <button
              onClick={() => setOpenSearch(!openSearch)}
              className="text-white text-xl">
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
                className="w-full bg-black/30 text-white px-4 py-2 rounded-full border border-gray-600 focus:outline-none" />
            </form>
          </div>
        )}
      </div>
    </nav >
  );
};

export default Header;
