import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { dialog } from "../constants";
import Title from "../style/Title";
import Navbar from "../components/Navbar";
import Button from "../components/Button";

export default function SuccessPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const { selectedSeats, session } = location.state;

  return (
    <>
      <Navbar />
      <SuccessTitle>
        <p>{dialog.success}</p>
      </SuccessTitle>
      <SuccessPageContent>
        <Section data-test="movie-info">
          <p>Filme e sessão</p>
          <p>{session.movie.title}</p>
          <p>{`${session.day.date} ${session.name}`}</p>
        </Section>
        <Section data-test="seats-info">
          <p>Ingressos</p>
          {selectedSeats.map(seat => <p key={seat.id}>{`Assento ${seat.seatName}`}</p>)}
        </Section>
        <Section data-test="client-info">
          <p>Comprador</p>
          {selectedSeats.map(seat =>
            <div key={seat.id}>
              <p>{`Nome: ${seat.name}`}</p>
              <p>{`CPF: ${seat.cpf}`}</p>
            </div>
          )}
        </Section>
        <VerticalSpace height="62px" />
        <Button dataTest="go-home-btn" onClick={() => navigate("/")} text="Voltar pra Home" />
      </SuccessPageContent>
    </>
  );
}

const SuccessPageContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 85%;
  margin: 0 auto;
  margin-bottom: 20px;
`;

const Section = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 22px;
  margin-bottom: 20px;
  p {
    margin-bottom: 5px;
  }
  &>p:nth-child(1) {
    font-weight: 700;
    font-size: 24px;
    margin-bottom: 10px;
  }
  div {
   margin-bottom : 10px;
  }
`;

const SuccessTitle = styled(Title)`
  font-weight: 700;
  color: ${props => props.theme.color.success};
  margin-bottom: 10px;
`;

const VerticalSpace = styled.div`
  height: ${props => props.height};
`;
