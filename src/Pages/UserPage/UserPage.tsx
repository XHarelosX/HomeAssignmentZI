import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useFatchdata from "../../Components/Hooks/use-fetch";
import MovieInfoSection from "../../Components/MovieList/MovieInfoSection/MovieInfoSection";
import MovieList from "../../Components/MovieList/MovieList";
import styles from "./UserPage.module.css";

const UserPage: React.FC = () => {

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
    }
  }, [getMoviesRequest]);

  return (
    <div>
      <div className={styles.divLink}>
        <Link to="/favorites" className={styles.link}>
          Favorite movies page
        </Link>
      </div>
      {moviesToRender}
      <MovieInfoSection />
    </div>
  );
};

export default UserPage;
