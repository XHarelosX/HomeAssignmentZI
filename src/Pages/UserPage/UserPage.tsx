import { useContext, useEffect, useState } from "react";
import { useHistory } from "react-router";
import useFatchdata from "../../Components/Hooks/use-fetch";
import MovieInfoSection from "../../Components/MovieList/MovieInfoSection/MovieInfoSection";
import MovieList from "../../Components/MovieList/MovieList";
import moviesContext from "../../store/movies-context";

interface Props {}

const UserPage: React.FC<Props> = (props: Props) => {
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
    if (isLoading) return <li>Loading Movies...</li>;
    if (error) return <li>Falied to get movies...</li>;
    return <MovieList movies={movies} />;
  };

  useEffect(() => {
    const username = document.cookie.split("=")[1];
    if (username) {
      getMoviesRequest({ url: "http://swapi.dev/api/films/" }, movieFound);
    } else history.replace("/home");
  }, [history, getMoviesRequest]);

  const moviesToRender = allMovies();

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
