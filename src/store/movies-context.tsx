import React, { useEffect, useState, useContext } from "react";
import LoginContext from "../store/login-context";
// -------------------------------------- Context Store-------------------------------------- //
interface Context {
  selectedMovieToShow: any;
  favoritesMovies: any[] | null;
  setSelectedMovieHandler: (arg: any) => void;
  setFavoriteMoviesHandler: (arg: any) => void;
  setFavoriteMoviesFromLocalStorage: () => void;
  clearFavoriteMovies: () => void;
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
  setFavoriteMoviesHandler: () => {},
  setFavoriteMoviesFromLocalStorage: () => {},
  clearFavoriteMovies: () => {},
});

// -------------------------------------- Context Provider Component-------------------------------------- //
export const MoviesContextProvider: React.FC = ({ children }) => {
  const loginCtx = useContext(LoginContext);
  const [selectedMovieToShow, setSelectedMovieToShow] = useState<any>(null);
  const [favoritesMovies, setFavoriteMovies] = useState<any[] | null>(null);

  const setMovieToDisplay = (movie: any[]) => {
    setSelectedMovieToShow(movie);
  };

  const setFavoriteMoviesState = (movieDetails: MovieObj) => {
    if (favoritesMovies) {
      const isMovieInFavorites: MovieObj | undefined = favoritesMovies.find(
        (item) => item.movieId === movieDetails.episode_id
      );
      if (isMovieInFavorites) return console.log("Already in Favorites");
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
    const pushFavoritesMoviesToContext: string | null = localStorage.getItem(
      `favoriteMovies=${loginCtx.token}`
    );
    if (pushFavoritesMoviesToContext) {
      const moviesObj = JSON.parse(pushFavoritesMoviesToContext);
      const moviesArr = Object.entries(moviesObj).map((item) => item[1]);
      setFavoriteMovies(moviesArr);
    }
  };

  const clearFavoriteMovies = () => {
    localStorage.removeItem(`favoriteMovies=${loginCtx.token}`)
    setFavoriteMovies(null);
  };

  const contextValue = {
    favoritesMovies,
    selectedMovieToShow,
    setSelectedMovieHandler: setMovieToDisplay,
    setFavoriteMoviesHandler: setFavoriteMoviesState,
    setFavoriteMoviesFromLocalStorage,
    clearFavoriteMovies,
  };

  useEffect(() => {
    if (favoritesMovies) {
      const moviesJsonAsString = JSON.stringify({ ...favoritesMovies });
      localStorage.setItem(
        `favoriteMovies=${loginCtx.token}`,
        moviesJsonAsString
      );
      return;
    }
  }, [loginCtx.token, favoritesMovies]);

  return (
    <moviesContext.Provider value={contextValue}>
      {children}
    </moviesContext.Provider>
  );
};

export default moviesContext;
