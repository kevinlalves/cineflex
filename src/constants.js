const host = "https://mock-api.driven.com.br/api/v8/cineflex";

const api = Object.freeze({
  movies: host+"/movies" ,
  showtimes: host+"/showtimes",
  book: host+"/seats/book-many"
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

export { api };
