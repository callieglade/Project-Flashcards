import React, { useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import { readDeck } from "../utils/api";
import Card from "./Card";

function Deck({ deck, setDeck }) {
  const history = useHistory();
  const { deckId } = useParams();
  
  useEffect(() => {
    const abortController = new AbortController();
    readDeck(deckId, abortController.signal).then(setDeck).then(console.log(deck));
    return () => abortController.abort();
  }, [deckId, setDeck]);

  const handleDeleteDeck = async () => {
    const abortController = new AbortController();
    const confirmation = window.confirm("Are you sure?\nThis action cannot be undone.");
    if(confirmation) {
      deleteDeck(id, abortController.signal);
      history.push(`/`);
    }
  }

  if ( deck.id === 0 ) return <p>Loading...</p>;
  
  const cardList = deck.cards.map((card) => (
    <Card key={card.id} card={card} />
  ));
  
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
        <div>{cardList}</div>
      </div>
    </div>
  );
}

export default Deck;