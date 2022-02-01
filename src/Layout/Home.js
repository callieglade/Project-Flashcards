import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { listDecks } from "../utils/api";
import DeckCard from "./DeckCard";

function Home() {
  const [deckList, setDeckList] = useState([]);

  useEffect(() => {
    const abortController = new AbortController();
    listDecks(abortController.signal).then(setDeckList);
    return () => abortController.abort();
  }, []);

  const navigate = (destination) => {
    const history = useHistory();
    history.push(destination);
  }

  const deckCards = deckList.map((deck) => (
    <DeckCard key={deck.id} name={deck.name} desc={deck.description} />
  ));

  return (
    <div>
      <button 
        type="button" 
        className="btn btn-primary" 
        onClick={navigate(`/decks/new`)} 
        >+ Create Deck
      </button>
      <ul>{deckCards}</ul>
    </div>
  );
}

export default Home;