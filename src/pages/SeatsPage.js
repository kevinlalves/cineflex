import { useEffect, useState } from "react";
import { useParams } from "react-router";
import Loading from "../components/Loading";
import { api, dialog } from "../constants";
import Title from "../style/Title";
import Form from "../components/Form";
import { Seats, Seat } from "../style/Seats";
import SeatsInfo from "../components/SeatsInfo";
import styled from "styled-components";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export default function SeatsPage() {
  const [session, setSession] = useState(undefined);
  const [seatStates, setSeatStates] = useState({});
  const [selectedSeats, setSelectedSeats] = useState([]);
  const { id } = useParams();

  function format(num) {
    return ("0" + num).slice(-2);
  }

  const selectSeat = seat => {
    if (seatStates[seat.id] === "unavailable") {
      return;
    }

    let newSelectedSeats;
    if (seatStates[seat.id] === "selected") {
      newSelectedSeats = selectedSeats.filter(ele => ele.id !== seat.id);
    } else {
      newSelectedSeats = [{ id: seat.id, seatName: seat.name, name: "", cpf: "" }, ...selectedSeats];
    }
    setSelectedSeats(newSelectedSeats);
    const newSeatStates = { ...seatStates }
    newSeatStates[seat.id] = (seatStates[seat.id] === "selected" ? "available" : "selected");
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
      <Navbar backExists={true} />
      <SeatsPageContent>
        <Title>
          <p>{dialog.seats}</p>
        </Title>
        <Seats>
          {session
            ? session.seats.map(seat =>
              <Seat key={seat.id} onClick={() => selectSeat(seat)} seatState={seatStates[seat.id]}>
                {format(seat.name)}
              </Seat>
            )
            : <Loading />
          }
        </Seats>
        <SeatsInfo />
        <Form session={session} selectedSeats={selectedSeats} setSelectedSeats={setSelectedSeats} />
        {session &&
          <Footer
            title={session.movie.title}
            posterURL={session.movie.posterURL}
            weekday={session.day.weekday}
            name={session.name}
          />
        }
      </SeatsPageContent>
    </>
  );
}

const SeatsPageContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 137px;
`;
