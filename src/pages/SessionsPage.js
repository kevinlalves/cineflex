import { useEffect, useState } from "react";
import { useParams } from "react-router";
import styled from "styled-components";
import Loading from "../components/Loading";
import { api, dialog } from "../constants";
import Title from "../style/Title";
import Day from "../components/Day";

export default function SessionsPage() {
  const [movie, setMovie] = useState(undefined);
  const { id } = useParams();

  useEffect(() => {
    fetch(api.movies+`/${id}/showtimes`)
      .then(response => response.json())
      .then(data => setMovie(data))
  }, []);

  return (
    <SessionsPageContent>
      <Title>
        <p>{dialog.sessions}</p>
      </Title>
      {movie ? movie.days.map(day => <Day key={day.id} day={day} />) : <Loading />}
    </SessionsPageContent>
  );
}

const SessionsPageContent = styled.div`
  display: flex;
  width: 90%;
  margin-bottom: 15px;
  flex-direction: column;
  align-items: center;
`;
