import { useContext } from "react";
import moviesContext from "../../store/movies-context";
import MovieItem from "./MovieItem/MovieItem";
import styles from "./MovieList.module.css";

interface Props {
  movies: any[];
}

const MovieList: React.FC<Props> = ({ movies }) => {
  
  const movieCtx = useContext(moviesContext);

  const selectMovieToDisplayHandler = (id?: any) => {
      const movieFoundById: any[] = movies.filter((movie) => movie.episode_id === id);
    movieCtx.setSelectedMovieHandler({...movieFoundById[0]})
  };

  const displayMovies = () => {
    const sortedMovies = movies.map((movie) => (
      <MovieItem
        key={movie.episode_id}
        id={movie.episode_id}
        onClickFunc={selectMovieToDisplayHandler}
      >
        {movie.title}
      </MovieItem>
    ));
    return sortedMovies;
  };

  const allMoveis = displayMovies();

  return (
    <div className={styles.divUlContainer}>
      <p>Click on the movie more information.</p>
      <ul className={styles.moviesUl}>{allMoveis}</ul>
    </div>
  );
};

export default MovieList;
