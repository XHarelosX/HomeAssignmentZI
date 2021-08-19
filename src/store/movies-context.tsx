import React, { useState } from "react";
// -------------------------------------- Context Store-------------------------------------- //
interface Context {
  selectedMovieToShow: any;
  favoritesMovies: any[];
  setSelectedMovieHandler: (arg?: any) => void;
  setFavoriteMoviesHandler: (arg?: any) => void;
}

const moviesContext = React.createContext<Context>({
  selectedMovieToShow: undefined,
  favoritesMovies: [],
  setSelectedMovieHandler: () => {},
  setFavoriteMoviesHandler: () => {},
});

// -------------------------------------- Context Provider Component-------------------------------------- //
export const MoviesContextProvider: React.FC = ({ children }) => {
  const [selectedMovieToShow, setSelectedMovieToShow] = useState<any>(null);
  const [favoritesMovies, setFavoriteMovies] = useState < any[] >([]);

  const setMovieToDisplay = (movie: any[]) => {
    setSelectedMovieToShow(movie);
  };

  const setFavoriteMoviesToDisplay = (movie: any) => {
    setFavoriteMovies((prevState: any) => { return [...prevState, movie] } );
  };

  const contextValue = {
    favoritesMovies,
    selectedMovieToShow: selectedMovieToShow,
    setSelectedMovieHandler: setMovieToDisplay,
    setFavoriteMoviesHandler: setFavoriteMoviesToDisplay,
  };

  return (
    <moviesContext.Provider value={contextValue}>
      {children}
    </moviesContext.Provider>
  );
};

export default moviesContext;
