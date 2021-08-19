import React, { useState } from "react";
// -------------------------------------- Context Store-------------------------------------- //
interface Context {
  selectedMovieToShow: any;
  setSelectedMovieHandler: (arg?: any) => void;
}

const moviesContext = React.createContext<Context>({
  selectedMovieToShow: undefined,
  setSelectedMovieHandler: () => {},
});

// -------------------------------------- Context Provider Component-------------------------------------- //
export const MoviesContextProvider: React.FC = ({ children }) => {
  const [selectedMovieToShow, setSelectedMovieToShow] = useState<any>(null);

  const setMovieToDisplay = (movie: any[]) => {
    setSelectedMovieToShow(movie);
  };

  const contextValue = {
    selectedMovieToShow: selectedMovieToShow,
    setSelectedMovieHandler: setMovieToDisplay,
  };

  return (
    <moviesContext.Provider value={contextValue}>
      {children}
    </moviesContext.Provider>
  );
};

export default moviesContext;
