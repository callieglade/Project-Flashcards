import React from "react";
import { useHistory } from "react-router-dom";

function StudyCard({ deck }) {
  const { id, cards } = deck;
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
      <p>StudyCard placeholder component</p>
    );
  }
}

export default StudyCard;