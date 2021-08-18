import { useEffect, useState, useContext } from "react";
import { useHistory } from "react-router";
import LoginContext from "../../store/login-context";
import MovieItem from "./MovieItem/MovieItem";
import styles from "./MovieList.module.css";
import useFatchdata from "../../Components/Hooks/use-fetch";

const MovieList = () => {
  let history = useHistory();
  const loginCtx = useContext(LoginContext);
  const [movies, setMovies] = useState<any[]>([]);
  const { isLoading, error, sendRequest: getMoviesRequest } = useFatchdata();

  useEffect(() => {
    if (loginCtx.isLoggedIn) {
      const movieFound = (moviesObject: any) => {
        try {  const foundMoviesSorted = moviesObject.results.sort((a: any, b: any) => a.episode_id - b.episode_id);
          setMovies(foundMoviesSorted);
        }
        catch (err) {
          console.error(err);
        }
      };
      getMoviesRequest({ url: "http://swapi.dev/api/films/"}, movieFound);
    }
    else {
      history.push("/");
    }
  }, [loginCtx.isLoggedIn, history, getMoviesRequest]);


  const displayMovies = () => {
    if (isLoading) {
      return <li>Loading Movies...</li>
    }
    if (error) {
      return <li>Falied to get movies...</li>
    }
   const sortedMovies = movies.map((movie) => <MovieItem key={movie.episode_id}>{movie.title}</MovieItem>)
    return sortedMovies
  }
  const allMoveis = displayMovies()

  return (
    <div className={styles.divUlContainer}>
      <p>Click on the movie more information.</p>
      <ul className={styles.moviesUl}>
        {allMoveis}
  </ul>
      </div>
  );
};

export default MovieList;
