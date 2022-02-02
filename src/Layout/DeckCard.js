import React from "react";
import { useHistory } from "react-router-dom";
import { deleteDeck } from "../utils/api";

function DeckCard({ deck }) {
  const history = useHistory();
  const { id, name, description, cards } = deck;

  const handleDeleteDeck = async () => {
    const abortController = new AbortController();
    const confirmation = window.confirm("Are you sure?\nThis action cannot be undone.");
    if(confirmation) {
      deleteDeck(id, abortController.signal);
      history.push(`/`);
    }
  }

  return (
    <div className="card my-3">
      <div className="card-body">
        <div className="row">
          <h3 className="col card-title">{name}</h3>
          <p className="col-2">{cards.length} cards</p>
        </div>
        <p className="card-text">{description}</p>
        <div className="row">
          <button 
            type="button" 
            className="btn btn-secondary ml-3" 
            onClick={() => history.push(`/decks/${id}`)} 
            >View
          </button>
          <button 
            type="button" 
            className="btn btn-primary ml-3" 
            onClick={() => history.push(`/decks/${id}/study`)} 
            >Study
          </button>
          <button 
            type="button" 
            className="btn btn-danger ml-3" 
            onClick={handleDeleteDeck} 
            >Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default DeckCard;