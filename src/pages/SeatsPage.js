import { useEffect, useState } from "react";
import { useParams } from "react-router";
import styled from "styled-components";
import Loading from "../components/Loading";
import { api, dialog } from "../constants";
import Title from "../style/Title";

export default function SeatsPage() {
  const [session, setSession] = useState(undefined);
  const [seatStates, setSeatStates] = useState({});
  const [selectedSeats, setSelectedSeats] = useState([]);
  const { id } = useParams();

  function format(num) {
    return ("0" + num).slice(-2);
  }

  const selectSeat = seat => {
    const newSelectedSeats = [seat.id, ...selectedSeats];
    setSelectedSeats(newSelectedSeats);
    idString = seat.id.toString();
    const newSeatStates = { idString: "selected", ...seatStates }
    setSeatStates(newSeatStates);
  };

  useEffect(() => {
    fetch(api.sessions + `/${id}/seats`)
      .then(response => response.json())
      .then(data => {
        setSession(data);
        const newSeatStates = {};
        for (const seat of data.seats) {
          newSeatStates[seat.id] = (seat.isAvailable ? "available" : "unavailable");
        }
        setSeatStates(newSeatStates);
      });
  }, [id])

  return (
    <>
      <Title>
        <p>{dialog.seats}</p>
      </Title>
      <Seats>
        {session
          ? session.seats.map(seat =>
            <Seat onClick={() => selectSeat(seat)} seatState={seatStates[seat.id]}>{format(seat.name)}</Seat>
          )
          : <Loading />
        }
      </Seats>
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
    </>
  );
}

const Seats = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
`;

const Seat = styled.button`
  height: 26px;
  width: 26px;
  background-color: ${props => props.theme.color[props.seatState]};
  border-radius: 50%;
  border: 1px ${props => props.theme.color[props.seatState+"Border"]};
`;

const SeatInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
