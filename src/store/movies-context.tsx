import React, { useEffect, useState } from "react";
// -------------------------------------- Context Store-------------------------------------- //
interface Context {
  selectedMovieToShow: any;
  favoritesMovies: any[] | null;
  setSelectedMovieHandler: (arg: any) => void;
  setFavoriteMoviesHandler: (arg: any) => void;
  setFavoriteMoviesFromLocalStorage: () => void,
}

interface MovieObj {
  episode_id: number;
  title: string;
  release_date: string;
  director: string;
  producer: string;
  opening_crawl: string;
}

const moviesContext = React.createContext<Context>({
  selectedMovieToShow: null,
  favoritesMovies: [],
  setSelectedMovieHandler: () => {},
  setFavoriteMoviesHandler: () => { },
  setFavoriteMoviesFromLocalStorage: () => { },
});

// -------------------------------------- Context Provider Component-------------------------------------- //
export const MoviesContextProvider: React.FC = ({ children }) => {
  const [selectedMovieToShow, setSelectedMovieToShow] = useState<any>(null);
  const [favoritesMovies, setFavoriteMovies] = useState<any[] | null>(null);

  const setMovieToDisplay = (movie: any[]) => {
    setSelectedMovieToShow(movie);
  };

  const setFavoriteMoviesState = (movieDetails: MovieObj) => {
    
    if (favoritesMovies) {
      const isMovieInFavorites: MovieObj | undefined = favoritesMovies.find((item) => item.movieId === movieDetails.episode_id);
      if (isMovieInFavorites)  return console.log("Already in Favorites");
    }

    const shortMovieInfo = {
      movieId: movieDetails.episode_id,
      movieTitle: movieDetails.title,
      movieReleaseDate: movieDetails.release_date,
      movieDirector: movieDetails.director,
      movieProducer: movieDetails.producer,
      movieOpeningCrawl: movieDetails.opening_crawl,
    };

    setFavoriteMovies((prevFavoritesMovies) => {
      if (prevFavoritesMovies) return [...prevFavoritesMovies, shortMovieInfo];
      return [shortMovieInfo];
    });
  };

  const setFavoriteMoviesFromLocalStorage = () => {
    const pushFavoritesMoviesToContext: string | null =
    localStorage.getItem("favoriteMovies");
    if (pushFavoritesMoviesToContext) {
      const moviesObj = JSON.parse(pushFavoritesMoviesToContext);
      const moviesArr = Object.entries(moviesObj).map((item) => item[1]);
      setFavoriteMovies(moviesArr)
    }
  }

  const contextValue = {
    favoritesMovies,
    selectedMovieToShow,
    setSelectedMovieHandler: setMovieToDisplay,
    setFavoriteMoviesHandler: setFavoriteMoviesState,
    setFavoriteMoviesFromLocalStorage
  };

  useEffect(() => {    
    if (favoritesMovies) {
      const moviesJsonAsString = JSON.stringify({ ...favoritesMovies });
      localStorage.setItem("favoriteMovies", moviesJsonAsString);
      return;
    }    
  }, [favoritesMovies]);

  return (
    <moviesContext.Provider value={contextValue}>
      {children}
    </moviesContext.Provider>
  );
};

export default moviesContext;
