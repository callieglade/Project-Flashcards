import React, { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import { readDeck, deleteDeck } from "../utils/api";
import Card from "./Card";

function Deck({ deck, setDeck }) {
  const [deckUpToDate, setDeckUpToDate] = useState(false);
  const history = useHistory();
  const { deckId } = useParams();
  
  useEffect(() => {
    if (!deckUpToDate) {
      const abortController = new AbortController();
      readDeck(deckId, abortController.signal)
      .then(setDeck)
      .then((current) => setDeckUpToDate(!current));
      return () => abortController.abort();
    }
  }, [deckId, setDeck, deckUpToDate]);

  const handleDeleteDeck = async () => {
    const abortController = new AbortController();
    const confirmation = window.confirm("Are you sure?\nThis action cannot be undone.");
    if(confirmation) {
      deleteDeck(deck.id, abortController.signal);
      history.push(`/`);
    }
  }
  
  if (deck.id) {
    return (
      <div>
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item text-primary" onClick={() => history.push(`/`)}>Home</li>
            <li className="breadcrumb-item active">{deck.name}</li>
          </ol>
        </nav>
        <div>
          <h3>{deck.name}</h3>
          <p>{deck.description}</p>
          <div className="row">
              <button 
                type="button" 
                className="btn btn-secondary mx-3"
                onClick={() => history.push(`/decks/${deck.id}/edit`)}
                >Edit
              </button>
              <button
                type="button" 
                className="btn btn-primary mr-3"
                onClick={() => history.push(`/decks/${deck.id}/study`)}
                >Study
              </button>
              <button 
                type="button" 
                className="btn btn-primary mr-3"
                onClick={() => history.push(`/decks/${deck.id}/cards/new`)}
                >+ Add Cards
              </button>
              <button  
                type="button" 
                className="btn btn-danger mr-3"
                onClick={handleDeleteDeck}
                >Delete
            </button>
          </div>
          <h2 className="my-4">Cards</h2>
          <div>
            {deck.cards.map((card) => (
              <Card key={card.id} card={card} setDeckUpToDate={setDeckUpToDate} />
            ))}
          </div>
        </div>
      </div>
    );
  }
  return <p>Loading...</p>;
}

export default Deck;