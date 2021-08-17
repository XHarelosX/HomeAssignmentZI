import React, { useEffect, useState } from "react";

interface Props {}

const MovieList = (props: Props) => {
  const [movies, setMovies] = useState(null);

  async function fetchMovies() {
    const dataReq = await fetch("https://swapi.dev/api/films/");
    if (dataReq.ok) {
      const dataRes = await dataReq.json();
      return dataRes;
    }
    return null;
  }

  useEffect(() => {
    fetchMovies()
      .then((moviesData) => setMovies(moviesData.results))
      .catch((err) => console.error(err));
  }, []);

  return <div>Movies!</div>;
};

export default MovieList;
