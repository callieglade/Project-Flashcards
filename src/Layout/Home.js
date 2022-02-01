import React, { useState, useEffect } from "react";
import { listDecks } from "../utils/api";
import DeckCard from "./DeckCard";

function Home() {
  const [deckList, setDeckList] = useState([]);

  useEffect(() => {
    const abortController = new AbortController();
    listDecks(abortController.signal).then(setDeckList);
    return () => abortController.abort();
  }, [deckList]);

  const deckCards = deckList.map((deck) => (
    <DeckCard key={deck.id} name={deck.name} desc={deck.description} />
  ));

  return (
    <div>
      <button onClick={createDeck}>+ Create Deck</button>
      <ul>{deckCards}</ul>
    </div>
  );
}

export default Home;