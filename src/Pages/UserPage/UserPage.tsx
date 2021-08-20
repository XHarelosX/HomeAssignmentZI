import { useContext, useEffect, useState } from "react";
import { useHistory } from "react-router";
import useFatchdata from "../../Components/Hooks/use-fetch";
import MovieInfoSection from "../../Components/MovieList/MovieInfoSection/MovieInfoSection";
import MovieList from "../../Components/MovieList/MovieList";
import moviesContext from "../../store/movies-context";
import styles from './UserPage.module.css'


const UserPage: React.FC = () => {
  let history = useHistory();

  const movieCtx = useContext(moviesContext);

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

  const allMovies = () => {
    if (isLoading) return <li className={styles.liMsg}>Loading Movies...</li>;
    if (error) return <li className={styles.liMsg}>Falied to get movies...</li>;
    return <MovieList movies={movies} />;
  };

  const moviesToRender = allMovies();
  
  useEffect(() => {
    const username = document.cookie.split("=")[1];
    if (username) {
      getMoviesRequest({ url: "http://swapi.dev/api/films/" }, movieFound);
    } else history.replace("/home");
  }, [history, getMoviesRequest]);

  return (
    <div>
      {moviesToRender}
      <MovieInfoSection
        SelectedMovie={movieCtx.selectedMovieToShow}
      ></MovieInfoSection>
    </div>
  );
};

export default UserPage;
