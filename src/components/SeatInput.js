export default function SeatInput({ selectedSeats, setSelectedSeats, idx }) {
  const updateField = (e, field) => {
    const newSelectedSeats = [...selectedSeats];
    newSelectedSeats[idx][field] = e.target.value;
    setSelectedSeats(newSelectedSeats);
  };

  return (
    <>
      <label>
        <p>Nome do comprador: (assento {selectedSeats[idx].seatName})</p>
        <input
          type="text"
          value={selectedSeats[idx].name}
          onChange={e => updateField(e, "name")}
          required
          placeholder="Digite seu nome..."
        />
      </label>
      <label>
        <p>CPF fo comprador: (assento {selectedSeats[idx].seatName})</p>
        <input
          type="text"
          value={selectedSeats[idx].cpf}
          onChange={e => updateField(e, "cpf")}
          required
          placeholder="Digite seu CPF..."
        />
      </label>
    </>
  );
}
