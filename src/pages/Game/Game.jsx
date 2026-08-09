import { useEffect, useState } from "react";
import { fetchData } from "../../services/giphy";

export default function Game() {
  //Load Cards API state= fake API
  const [cardList, setCardList] = useState([]);

  //Save user selected cards
  const [selectCards, setSelectedCards] = useState([]);

  //State counter
  const [score, setIsScore] = useState(0);

  //Load data asyncronous
  useEffect(() => {
    async function loadCardsList() {
      const result = await fetchData("/cards");
      const slice = result
        .map((card) => ({ card, random: Math.random() }))
        .sort((a, b) => a.random - b.random)
        .map((obj) => obj.card)
        .slice(0, 4);

      setCardList(slice);
    }
    loadCardsList();
  }, [selectCards]);

  function findSelectedCard(id) {
    return selectCards.find((card) => card === id);
  }

  //handler
  function handlerClick(id) {
    //count + 1 number of wins
    setIsScore((prev) => prev + 1);
    setSelectedCards((prev) => {
      //handles loss
      const result = findSelectedCard(id);

      if (result !== undefined) {
        alert("You loose");
        setIsScore(0);
        return [];
      }

      //handles win
      const newCards = [...prev, id];
      if (newCards.length === 4) {
        alert(`You win`);
        return [];
      }

      return newCards;
    });
  }

  return (
    <>
      <div>
        <h2>{score}</h2>
      </div>
      {cardList.map((card) => (
        <div key={card.id}>
          <button onClick={() => handlerClick(card.id)}>{card.name}</button>
        </div>
      ))}
    </>
  );
}
