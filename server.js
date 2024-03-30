const express = require("express");
const app = express();
const port = 8000;

const rappers = {
  "21 savage": {
    age: 31,
    birthName: "Shaia Bin",
    birthYear: "22 октября 1992[1][2] (31 год)",
    birthLocation:
      "Пластоу[d], Ньюэм, Большой Лондон, Англия, Великобритания[3][4][…]",
    Country: "Великобритания, США",
    Occupations: "рэпер, автор-исполнитель и музыкальный продюсер",
    yearsofactivity: "с 2013",
    labels: "Epic Records и Slaughter Gang[d]",
  },
  "chance the rapper": {
    age: 30,
    birthName: "Chancellor Jonathan Bennett",
    birthYear: "April 16, 1993 (30 years old)",
    birthLocation: "Chicago, Illinois, USA",
    Country: "USA",
    Occupation: "musician",
    Yearsofactivit: "2011 — n.v.",
    instruments: "Piano",
    genres: "Hip-hop genres",
    Nicknames: "Chano and Chance The Rapper",
    Awards:
      "BET Award for Best New Artist[d] (2017) BET Award for Best Collaboration[d] (2017) Grammy Award for Best New Artist (2017) Grammy Award for Best Rap Album (2017) Grammy Award for Best rap performance (2017)",
  },
  dylan: {
    age: 25,
    birthname: "Natasha Woods",
    birthYear: "Born 25 October 1999 Bures, England",
    genres: "Popelectro-pop",
    Occupations: "Singer songwriter",
    Instruments: "Vocals, Electric guitar, Acoustic guitar",
    Yearsofactivity: "2019–present",
    Labels: "Island",
    Nicknames: "dylan",
  },
};

app.get("/", (request, response) => {
  response.sendFile(__dirname + "/index.html");
});

app.get("/api/:rapperName", (request, response) => {
  const rappersName = request.params.rapperName.toLowerCase();
  if (rappers[rappersName]) {
    response.json(rappers[rappersName]);
  } else {
    response.json(rappers["dylan"]);
  }
  //response.json(rappers);
});

app.listen(port, () => {
  console.log(
    `The server is running on the port: ${port}! You better go catch it!`
  );
});
