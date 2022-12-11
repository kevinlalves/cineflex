const host = "https://mock-api.driven.com.br/api/v8/cineflex";

const api = Object.freeze({
  movies: host+"/movies" ,
  sessions: host+"/showtimes",
  bookSeats: host+"/seats/book-many"
});

const theme = Object.freeze({
  color: {
    button: "#E8833A",
    title: "#E8833A",
    titleBack: "#C3CFD9",
    available: "#C3CFD9",
    availableBorder: "#7B8B99",
    selectedBorder: "#0E7D71",
    selected: "#1AAE9E",
    unavailableBorder: "#F7C52B",
    unavailable: "#FBE192",
    success: "#247A6B"
  }
});

const dialog = Object.freeze({
  movies: "Selecione o filme",
  sessions: "Selecione o horário",
  seats: "Selecione o(s) assento(s)",
  success: "Pedido feito com sucesso!"
});

export { api, theme, dialog };
