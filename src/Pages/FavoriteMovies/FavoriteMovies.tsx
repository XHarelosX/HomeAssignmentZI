import React, { useContext } from "react";
import moviesContext from "../../store/movies-context";
import { Link } from "react-router-dom";
import styles from "./FavortieMovies.module.css";

const FavoriteMovies: React.FC = () => {
  const movieCtx = useContext(moviesContext);
  const movies = movieCtx.favoritesMovies;

  const contentToDisplay = !movies ? (
    <p>No Movies Found</p>
  ) : (
    movies.map((movie) => {
      return (
        <li key={movie.movieId}>
          <div className={styles.title}>{movie.movieTitle}</div>
          <div>
            <img
              className={styles.imgContainer}
              src={`${process.env.PUBLIC_URL}/Images/StarWarsEpisode${movie.movieId}.jpg`}
              alt="Movie Poster"
            />
          </div>
        </li>
      );
    })
  );

  return (
    <div>
      <div className={styles.divLink}>
        <Link to="/userpage" className={styles.link}>
          Movie list page
        </Link>
      </div>
      <ul className={styles.moviesUl}>{contentToDisplay}</ul>
    </div>
  );
};

export default FavoriteMovies;
