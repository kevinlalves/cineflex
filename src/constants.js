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
    chosenBorder: "#0E7D71",
    chosen: "#1AAE9E",
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
