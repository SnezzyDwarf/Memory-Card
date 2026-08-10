import { useEffect, useState } from "react";
import { fetchData } from "../../../services/dataEasy";

//css
import "../styles/gameStyle.css";

export default function GameEasy({ handlerClick, score, selectCards }) {
  // set card list from API
  const [cardList, setCardList] = useState([]);

  // Load card list from API and i used for division
  useEffect(() => {
    async function loadCardsList() {
      const result = await fetchData();
      const slice = result
        .map((card) => ({ card, random: Math.random() }))
        .sort((a, b) => a.random - b.random)
        .map((obj) => obj.card)
        .slice(0, 4);

      setCardList(slice);
    }
    loadCardsList();
  }, [selectCards]);

  return (
    <>
      <section className="section-game">
        <div className="container-score">
          <h2>
            Rounds wins: <span>{score}</span>
          </h2>
        </div>
        <div className="container-game">
          {cardList.map((card) => (
            <div key={card.id} className="container-game_cards">
              <button
                onClick={() => handlerClick(card.id)}
                className="container-game_cards-button"
              >
                <img src={card.image_uris.art_crop} alt={card.name} />
              </button>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
