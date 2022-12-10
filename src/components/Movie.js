import { Link } from "react-router-dom";
import styled from "styled-components";

export default function Movie({ movie }) {
  return (
    <Link to={`/sessoes/${movie.id}`}>
      <MovieContent>
        <img src={movie.posterURL} alt="movie poster" />
      </MovieContent>
    </Link>
  );
}

const MovieContent = styled.div`
  width: 145px;
  height: 209px;
  border-radius: 3px;
  padding: 8px;
  box-shadow: 0px 2px 4px 2px rgba(0, 0, 0, 0.1);
  margin-bottom: 19px;
  cursor: pointer;
  img {
    width: 100%;
    height: 100%;
  }
`;
