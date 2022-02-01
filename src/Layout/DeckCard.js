import React from "react";
import { useHistory } from "react-router-dom";

function DeckCard({ name, desc }) {
  const history = useHistory();
  // TODO: Add Flexbox & Boostrap 4 classes to each element

  return (
    <div className="card">
      <div className="card-body">
        <div>
          <h3 className="card-title">{name}</h3>
          <p>{/* TODO: number of cards */} cards</p>
        </div>
        <p className="card-text">{desc}</p>
        <div>
          <button 
            type="button" 
            className="btn btn-secondary" 
            onClick={() => history.push(`/decks/:deckId`)} 
            >View
          </button>
          <button 
            type="button" 
            className="btn btn-primary" 
            onClick={() => history.push(`/decks/:deckId/study`)} 
            >Study
          </button>
          <button 
            type="button" 
            className="btn btn-primary" 
            onClick={() => history.push(`/decks/new`)} 
            >Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default DeckCard;