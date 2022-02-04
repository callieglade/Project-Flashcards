import React from "react";
import { useHistory } from "react-router";
import { deleteCard } from "../utils/api";

function Card({ card }) {
  const history = useHistory();

  const handleDeleteCard = async () => {
    const abortController = new AbortController();
    const confirmation = window.confirm("Are you sure?\nThis action cannot be undone.");
    if(confirmation) {
      deleteCard(card.id, abortController.signal);
    }
  }

  return (
    <div className="card">
      <div className="row mt-3">
        <p className="col text-center">{card.front}</p>
        <p className="col text-center">{card.back}</p>
      </div>
      <div className="row my-2 mx-2">
        <button 
          type="button" 
          className="btn btn-secondary mx-3"
          onClick={() => history.push(`/decks/${card.deckId}/cards/${card.id}/edit`)}
          >Edit
        </button>
        <button 
          type="button"
          className="btn btn-danger"
          onClick={handleDeleteCard}
          >Delete
        </button>
      </div>
    </div>
  );
}

export default Card;