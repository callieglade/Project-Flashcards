import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { listDecks } from "../utils/api";
import DeckCard from "./DeckCard";

function Home() {
  const [deckList, setDeckList] = useState([]);
  const history = useHistory();

  useEffect(() => {
    const abortController = new AbortController();
    listDecks(abortController.signal).then(setDeckList);
    return () => abortController.abort();
  }, []);

  const deckCards = deckList.map((deck) => (
    <DeckCard key={deck.id} deck={deck} />
  ));

  return (
    <div>
      <button 
        type="button" 
        className="btn btn-primary" 
        onClick={() => history.push(`/decks/new`)} 
        >+ Create Deck
      </button>
      <div className="card-list">{deckCards}</div>
    </div>
  );
}

export default Home;