import { useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { searchMovies } from "../api/tmdb";
import MovieRow from "../components/MovieRow";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Movie } from "../types/Movie";
import { useTranslation } from "react-i18next";

const Search = () => {
  const [params] = useSearchParams();
  const query = params.get("q");
  const [results, setResults] = useState<Movie[]>([]);
  const { t } = useTranslation();


  useEffect(() => {
    if (!query) return;

    const fetchResults = async () => {
      const res = await searchMovies(query);
      setResults(res);
    };

    fetchResults();
  }, [query]);

  return (
    <>
      <Header />
      <div className="pt-24">
        <h2 className="px-16 text-xl mb-6">
          {t('Search.search_query')} <span className="font-bold">{query}</span>
        </h2>

        {results.length === 0 ? (
          <h3 className=" text-white/50 flex text-lg justify-center">
            {t('search.search_result')}
          </h3>
        ) : (
          <MovieRow title={'Search.results_title'} movies={results} mediaType="tv" searching />
        )}


      </div>

      <Footer />
    </>
  );
};

export default Search;
