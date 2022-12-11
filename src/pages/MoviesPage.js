import { useEffect, useState } from "react";
import styled from "styled-components";
import { dialog, api } from "../constants";
import Movie from "../components/Movie";
import Loading from "../components/Loading";
import Title from "../style/Title";
import Navbar from "../components/Navbar";

export default function MoviesPage() {
  const [movies, setMovies] = useState(undefined);

  useEffect(() => {
    fetch(api.movies)
      .then(response => response.json())
      .then(data => setMovies(data))
      .catch(err => console.log("getMovies", err));
  }, []);

  return (
    <>
      <Navbar />
      <Title>
        <p>{dialog.movies}</p>
      </Title>
      <MoviesPageContent>
        {movies ? movies.map(movie => <Movie key={movie.id} movie={movie} />) : <Loading />}
      </MoviesPageContent>
    </>
  );
}


const MoviesPageContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-wrap: wrap;
  margin-bottom: 20px;
`;
