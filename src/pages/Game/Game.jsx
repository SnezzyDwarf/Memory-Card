import { useState } from "react";
import { useOutletContext } from "react-router-dom";

import GameEasy from "./GameEasy/GameEasy";

export default function Game() {
  //Save user selected cards
  const [selectCards, setSelectedCards] = useState([]);

  //State counter
  const [score, setIsScore] = useState(0);

  // Finding the selected card whit find and the id
  function findSelectedCard(id) {
    return selectCards.find((card) => card === id);
  }

  const { handleScore } = useOutletContext();

  //handler the user Click
  function handlerClick(id) {
    // Result will be equalt to findSelectCard i use id as paramater
    const result = findSelectedCard(id);
    if (result !== undefined) {
      alert("You loose");
      setIsScore(0);
      setSelectedCards([]);
      return;
    }

    const newCards = [...selectCards, id];

    // WIN
    if (newCards.length === 4) {
      alert("You win");
      setIsScore((prev) => prev + 1);
      handleScore();
      setSelectedCards([]);
      return;
    }

    // Continua a ronda
    setSelectedCards(newCards);
  }

  return (
    <>
      <section>
        <GameEasy
          handlerClick={handlerClick}
          score={score}
          selectCards={selectCards}
        />
      </section>
    </>
  );
}
