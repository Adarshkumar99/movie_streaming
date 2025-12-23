import { useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { searchMovies } from "../api/tmdb";
import MovieRow from "../components/MovieRow";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Search = () => {
  const [params] = useSearchParams();
  const query = params.get("q");
  const [results, setResults] = useState([]);


  useEffect(() => {
    if (!query) return;

    const fetchResults = async () => {
      const res = await searchMovies(query);
      setResults(res.data.results);
    };

    fetchResults();
  }, [query]);

  return (
    <>
      <Header />
      <div className="pt-24">
        <h2 className="px-16 text-xl mb-6">
          Search results for: <span className="font-bold">{query}</span>
        </h2>

        {results.length === 0 ? (
          <h3 className=" text-white/50 flex text-lg justify-center">
            No movies found matching your search.
          </h3>
        ) : (
          <MovieRow title="Results" movies={results} searching />
        )}


      </div>

      <Footer />
    </>
  );
};

export default Search;
