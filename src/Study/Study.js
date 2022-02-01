import React, { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import { readDeck } from "../utils/api";

function Study() {
  const [deck, setDeck] = useState({});
  const { deckId } = useParams();
  const history = useHistory();

  useEffect(() => {
    const abortController = new AbortController();
    readDeck(deckId, abortController.signal).then(setDeck);
    return () => abortController.abort();
  }, []);

  return (
    <div>
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item text-primary" onClick={() => history.push(`/`)}>Home</li>
          <li className="breadcrumb-item text-primary" onClick={() => history.push(`/decks/${deckId}`)}>{deck.name}</li>
          <li className="breadcrumb-item active">Study</li>
        </ol>
      </nav>
      <h2>Study: {deck.name}</h2>
    </div>
  );
}

export default Study;