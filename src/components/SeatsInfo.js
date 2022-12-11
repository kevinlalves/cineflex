import styled from "styled-components";
import { Seats, Seat } from "../style/Seats";

export default function SeatsInfo() {
  return (
    <Seats>
      <SeatInfo>
        <Seat seatState="selected" />
        <p>Selecionado</p>
      </SeatInfo>
      <SeatInfo>
        <Seat seatState="available" />
        <p>Disponível</p>
      </SeatInfo>
      <SeatInfo>
        <Seat seatState="unavailable" />
        <p>Indisponível</p>
      </SeatInfo>
    </Seats>
  );
}


const SeatInfo = styled.div`
  margin-top: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 13px;
  margin-left: 6px;
  margin-right: 6px;
`;
