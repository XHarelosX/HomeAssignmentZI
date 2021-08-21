import styles from "./MovieInfoSection.module.css";
import moviesContext from "../../../store/movies-context";
import { useContext } from "react";

const MovieInfoSection: React.FC = () => {
  const moviesCtx = useContext(moviesContext);

  let SelectedMovie = moviesCtx.selectedMovieToShow;

  return (
    <div className={styles.divConteiner}>
      {SelectedMovie === null ? (
        <p className={styles.noSelectedMovieMsg}>Please Select Movie.</p>
      ) : (
        <section>
          <div className={styles.movieTitle}>
            <p>{SelectedMovie.title}</p>
          </div>
          <div className={styles.informationLayout}>
            <div>
              <img
                className={styles.imgContainer}
                src={`${process.env.PUBLIC_URL}/Images/StarWarsEpisode${SelectedMovie.episode_id}.jpg`}
                alt="Movie Poster"
              />
            </div>
            <div className={styles.movieDetails}>
              <div>
                <span className={styles.spanCategory}>Release date: </span>
                {SelectedMovie.release_date}
              </div>
              <div>
                <span className={styles.spanCategory}>Director: </span>
                {SelectedMovie.director}
              </div>
              <div>
                <span className={styles.spanCategory}>Producer: </span>
                {SelectedMovie.producer}
              </div>
              <div className={styles.openingText}>
                {SelectedMovie.opening_crawl}
              </div>
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

export default MovieInfoSection;
