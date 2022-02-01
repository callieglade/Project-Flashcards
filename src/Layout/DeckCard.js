import React from "react";
import { useHistory } from "react-router-dom";

function DeckCard({ name, desc }) {
  const history = useHistory();
  // TODO: Add Flexbox & Boostrap 4 classes to each element

  return (
    <div className="card">
      <div className="card-body">
        <div className="row">
          <h3 className="col card-title">{name}</h3>
          <p className="col-1">{/* TODO: number of cards */} cards</p>
        </div>
        <p className="card-text">{desc}</p>
        <div className="row">
          <button 
            type="button" 
            className="btn btn-secondary ml-3" 
            onClick={() => history.push(`/decks/:deckId`)} 
            >View
          </button>
          <button 
            type="button" 
            className="btn btn-primary ml-3" 
            onClick={() => history.push(`/decks/:deckId/study`)} 
            >Study
          </button>
          <button 
            type="button" 
            className="btn btn-danger ml-3" 
            onClick={() => history.push(`/decks/new`)} 
            >Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default DeckCard;