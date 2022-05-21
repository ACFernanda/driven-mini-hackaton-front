import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import GlobalStyle from "./GlobalStyle";
import MainPage from "./MainPage.js";
import GamePage from "./GamePage.js";

import CardsContext from "../contexts/CardsContext.js";

export default function App() {
  const [cards, setCards] = useState(JSON.parse(localStorage.getItem("cards")));
  const [time1, setTime1] = useState(0);
  const [time2, setTime2] = useState(0);
  // let time2 = 0;

  return (
    <CardsContext.Provider value={{ cards, setCards, time1, time2, setTime1, setTime2 }}>
      <BrowserRouter>
        <GlobalStyle />
        <Routes>
          <Route path="/" element={<MainPage setCards={setCards} />}></Route>
          <Route path="/jogar/:id" element={<GamePage />}></Route>
        </Routes>
      </BrowserRouter>
    </CardsContext.Provider>
  );
}
