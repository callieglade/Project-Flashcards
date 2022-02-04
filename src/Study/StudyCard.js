import React, { useState } from "react";
import { useHistory } from "react-router-dom";

function StudyCard({ deck }) {
  const { id, cards } = deck;
  const [card, setCard] = useState(cards[0]);
  const [isFlipped, setFlipped] = useState(false);
  const history = useHistory();

  const handleNext = () => {
    setFlipped(false);
    if (card.id < cards.length) {
      setCard(cards[card.id]);
    } else {
      if (window.confirm("Restart cards?\nClick 'Cancel' to return to the home page.")) {
        setCard(cards[0])
      } else history.push(`/`);
    } 
  }

  if (cards.length <= 2) {
    return (
      <div>
        <h3>Not enough cards.</h3>
        <p>You need at least 3 cards to use study mode. There are only {cards.length} cards in this deck.</p>
        <button type="button" className="btn btn-primary" onClick={() => history.push(`/decks/${id}/cards/new`)}>+ Add Cards</button>
      </div>
    );
  } else {
    const cardPos = cards[0].id - 1; // used to make card.id relative to the deck
    return (
      <div className="card">
        <div className="card-body">
          <h4 className="card-title">Card {card.id - cardPos} of {cards.length}</h4>
          <div className="card-text">{isFlipped ? card.back : card.front}</div>
          <div className="row">
            <button 
              type="button"
              className="btn btn-secondary m-3"
              onClick={() => setFlipped(!isFlipped)}
              >Flip
            </button>
            <button 
              type="button"
              className="btn btn-primary my-3"
              hidden={!isFlipped}
              onClick={handleNext}
              >Next
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default StudyCard;