import { useEffect, useState } from "react";
import { useHistory } from "react-router";
import MovieItem from "./MovieItem/MovieItem";
import styles from "./MovieList.module.css";
import useFatchdata from "../../Components/Hooks/use-fetch";

interface Props {
  isLoggedIn: boolean;
}

const MovieList: React.FC<Props> = (props: Props) => {
  let history = useHistory();
  const [movies, setMovies] = useState<any[]>([]);
  const { isLoading, error, sendRequest: getMoviesRequest } = useFatchdata();

  const movieFound = (moviesObject: any) => {
    try {
      const foundMoviesSorted = moviesObject.results.sort(
        (a: any, b: any) => a.episode_id - b.episode_id
      );
      setMovies(foundMoviesSorted);
    } catch (err) {
      console.error(err);
    }
  };

  const displayMovies = () => {
    if (isLoading) {
      return <li>Loading Movies...</li>;
    }
    if (error) {
      return <li>Falied to get movies...</li>;
    }
    const sortedMovies = movies.map((movie) => (
      <MovieItem key={movie.episode_id}>{movie.title}</MovieItem>
    ));
    return sortedMovies;
  };

  useEffect(() => {
    const username = document.cookie.split("=")[1];
    if (username) {
      if (props.isLoggedIn) {
        getMoviesRequest({ url: "http://swapi.dev/api/films/" }, movieFound);
      }
    } else history.replace("/home");
  }, [props.isLoggedIn, history, getMoviesRequest]);

  const allMoveis = displayMovies();

  return (
    <div className={styles.divUlContainer}>
      <p>Click on the movie more information.</p>
      <ul className={styles.moviesUl}>{allMoveis}</ul>
    </div>
  );
};

export default MovieList;
