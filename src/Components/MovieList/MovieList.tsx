import { useContext, useEffect } from "react";
import moviesContext from "../../store/movies-context";
import MovieItem from "./MovieItem/MovieItem";
import styles from "./MovieList.module.css";

interface Props {
  movies: any[];
}

const MovieList: React.FC<Props> = ({ movies }) => {
  const movieCtx = useContext(moviesContext);

  const selectMovieToDisplayHandler = (id: any) => {
    const movieFoundById: any[] = movies.filter(
      (movie) => movie.episode_id === id
    );
    movieCtx.setSelectedMovieHandler({ ...movieFoundById[0] });
  };

  const addMovieToFavoriteHandler = (id: any) => {
    const movieFoundById: any[] = movies.filter(
      (movie) => movie.episode_id === id
    );

    if (movieCtx.favoritesMovies) {
      if (movieCtx.favoritesMovies.includes(movieFoundById[0].title)) return;
    }
    movieCtx.setFavoriteMoviesHandler(movieFoundById[0]);
  };

  const displayMovies = () => {
    const Movies = movies.map((movie) => (
      <MovieItem
        key={movie.episode_id}
        id={movie.episode_id}
        img={`${process.env.PUBLIC_URL}/Images/StarWarsEpisode${movie.episode_id}.jpg`}
        DisplayMovieInfoOnClick={selectMovieToDisplayHandler}
        AddMovieToFavoritesOnClick={addMovieToFavoriteHandler}
      >
        {movie.title}
      </MovieItem>
    ));
    return Movies;
  };
  const allMoveis = displayMovies();

  useEffect(() => {
    movieCtx.setFavoriteMoviesFromLocalStorage();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className={styles.divUlContainer}>
      <p>Click on the movie more information.</p>
      <ul className={styles.moviesUl}>{allMoveis}</ul>
    </div>
  );
};

export default MovieList;
