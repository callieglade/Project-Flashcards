import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

function StudyCard({ deck }) {
  const { id, cards } = deck;
  const [card, setCard] = useState({id: 0});
  const history = useHistory();

  if (cards.length <= 2) {
    return (
      <div>
        <h3>Not enough cards.</h3>
        <p>You need at least 3 cards to use study mode. There are only {cards.length} cards in this deck.</p>
        <button type="button" onClick={() => history.push(`/decks/${id}/cards/new`)}>+ Add Cards</button>
      </div>
    );
  } else {
    return (
      /* TODO: Build card displaying functionality */
      <div className="card">
        <div className="card-body">
          <div className="card-title">Card {card.id} of {cards.length}</div>
          <div className="card-text">{card.front}</div>
          <div className="row">
            <button type="button" className="btn btn-secondary">Flip</button>
          </div>
        </div>
      </div>
    );
  }
}

export default StudyCard;