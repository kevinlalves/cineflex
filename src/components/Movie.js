import { Link } from "react-router-dom";
import MovieContent from "../style/MovieContent";

export default function Movie({ movie }) {
  return (
    <Link to={`/sessoes/${movie.id}`}>
      <MovieContent>
        <img src={movie.posterURL} alt="movie poster" />
      </MovieContent>
    </Link>
  );
}
