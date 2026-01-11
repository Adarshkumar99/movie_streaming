import { createContext, useContext, useEffect, useState } from "react";
import { Movie } from "../types/Movie";

/* Context structure */
interface FavouritesContextType {
  favourites: Movie[];
  addToFavourites: (movie: Movie) => void;
  removeFromFavourites: (id: number) => void;
  isFavourite: (id: number) => boolean;
};

/* Context create karna */
const FavouritesContext = createContext<FavouritesContextType | undefined>(undefined);

/*  Provider component */
type Props = {
  children: React.ReactNode;
};

export const FavouritesProvider = ({ children }: Props) => {
  /* State + localStorage se data load */
  const [favourites, setFavourites] = useState<Movie[]>(() => {
    const saved = localStorage.getItem("favourites");
    return saved ? JSON.parse(saved) : [];
  });

  /*  Jab favourites change ho → save karo */
  useEffect(() => {
    localStorage.setItem("favourites", JSON.stringify(favourites));
  }, [favourites]);

  /* Add favourite */
  const addToFavourites = (movie: Movie) => {
    setFavourites((prev) => [...prev, movie]);
  };

  /* Remove favourite */
  const removeFromFavourites = (id: number) => {
    setFavourites((prev) =>
      prev.filter((movie) => movie.id !== id)
    );
  };

  /* Check favourite */
  const isFavourite = (id: number) => {
    return favourites.some((movie) => movie.id === id);
  };

  /* Pass the data in app */
  return (
    <FavouritesContext.Provider
      value={{
        favourites,
        addToFavourites,
        removeFromFavourites,
        isFavourite,
      }}
    >
      {children}
    </FavouritesContext.Provider>
  );
};

/*  Custom hook */
export const useFavourites = () => {
  const context = useContext(FavouritesContext);

  if (!context) {
    throw new Error(
      "useFavourites must be used inside FavouritesProvider"
    );
  }

  return context;
};
