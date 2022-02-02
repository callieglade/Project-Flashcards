import React, { useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import { readDeck } from "../utils/api";

function Deck({ deck, setDeck }) {
  const history = useHistory();
  const { deckId } = useParams();
  
  useEffect(() => {
    const abortController = new AbortController();
    readDeck(deckId, abortController.signal).then(setDeck);
    return () => abortController.abort();
  }, [deckId]);

  return (
    <div>
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item text-primary" onClick={() => history.push(`/`)}>Home</li>
          <li className="breadcrumb-item active">Deck Name</li>
        </ol>
      </nav>
      <div>
        <h3>{deck.name}</h3>
        <p>{deck.description}</p>
        <div className="row">
          <button type="button" className="btn btn-secondary mx-3">Edit</button>
          <button type="button" className="btn btn-primary mr-3">Study</button>
          <button type="button" className="btn btn-primary mr-3">+ Add Cards</button>
          <button type="button" className="btn btn-danger mr-3">Delete</button>
        </div>
        <h2 className="my-4">Cards</h2>
      </div>
    </div>
  );
}

export default Deck;