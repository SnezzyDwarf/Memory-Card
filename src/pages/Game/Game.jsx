import { useState } from "react";
import { useOutletContext, useLocation } from "react-router-dom";

import GameEasy from "./GameEasy/GameEasy";
import GameMedium from "./GameMedium/GameMedium";
import GameHard from "./GameHard/GameHard";

export default function Game() {
  //Save user selected cards
  const [selectCards, setSelectedCards] = useState([]);

  //State counter
  const [score, setIsScore] = useState(0);

  const location = useLocation();
  const difficult = location.state?.difficulty;

  // Finding the selected card whit find and the id
  function findSelectedCard(id) {
    return selectCards.find((card) => card === id);
  }

  const { handleScore, highScore } = useOutletContext();

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

      const newScore = score + 1;
      if (newScore > highScore) {
        handleScore(newScore);
      }

      setIsScore((prev) => prev + 1);
      setSelectedCards([]);
      return;
    }

    // Continua a ronda\\

    setSelectedCards(newCards);
  }

  return (
    <>
      {difficult === "easy" && (
        <section>
          <GameEasy
            handlerClick={handlerClick}
            score={score}
            selectCards={selectCards}
          />
        </section>
      )}

      {difficult === "medium" && (
        <GameMedium
          handlerClick={handlerClick}
          score={score}
          selectCards={selectCards}
        />
      )}

      {difficult === "hard" && (
        <GameHard
          handlerClick={handlerClick}
          score={score}
          selectCards={selectCards}
        />
      )}
    </>
  );
}
