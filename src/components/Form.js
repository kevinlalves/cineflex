import styled from "styled-components";
import SeatInput from "./SeatInput";
import Button from "./Button";
import { api } from "../constants";
import { useNavigate } from "react-router-dom";

export default function Form({ selectedSeats, setSelectedSeats, session }) {
  const navigate = useNavigate();

  const submitForm = e => {
    e.preventDefault();
    if (selectedSeats.length === 0) {
      return ;
    }
    let body = {
      ids: [],
      compradores: []
    };
    for (const seat of selectedSeats) {
      body.ids.push(seat.id);
      body.compradores.push({ idAssento: seat.id, nome: seat.name, cpf: seat.cpf });
    }
    fetch(api.bookSeats, {
      method: "post",
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body)
    }).then(response => {
      if (response.statusText === "OK") {
        navigate("/sucesso", { state: { selectedSeats, session } });
      } else {
        alert(`Request failed with message: ${response.statusText}`);
      }
    });
  };

  return (
    <FormContent onSubmit={submitForm}>
      {selectedSeats.map((seat, idx) =>
        <SeatInput key={seat.id} selectedSeats={selectedSeats} idx={idx} setSelectedSeats={setSelectedSeats} />
      )}
      <div></div>
      <Button dataTest="book-seat-btn" text="Reservar assento(s)" />
    </FormContent>
  );
}

const FormContent = styled.form`
  margin-top: 41px;
  width: 85%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 40px;
  input {
    border: 1px #D4D4D4 solid;
    margin-bottom: 15px;
    border-radius: 3px;
    height: 51px;
    width: 100%;
    padding-left: 15px;
  }
  label {
    width: 100%;
  }
  input::placeholder {
    margin-left: 10px;
    font-style: italic;
    font-size: 18px;
    color: #AFAFAF;
  }
  div {
    height: 57px;
  }
  p {
    margin-bottom: 3px;
    font-size: 18px !important;
  }
`;
