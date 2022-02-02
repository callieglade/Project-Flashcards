import React, { useEffect } from "react";
import { Switch, Route, useParams } from "react-router-dom";
import { readDeck } from "../utils/api";
import Deck from "./Deck";
import Edit from "./Edit";

function DeckLayout({ deck, setDeck }) {
  const { deckId } = useParams();
  
  useEffect(() => {
    const abortController = new AbortController();
    readDeck(deckId, abortController.signal).then(setDeck);
    return () => abortController.abort();
  }, [deckId, setDeck]);

  if ( deck.id === 0 ) return <p>Loading...</p>;
  
  return (
    <Switch>
      <Route exact path={`/decks/:deckId`}>
        <Deck />
      </Route>
      <Route path={`/decks/:deckId/edit`}>
        <Edit />
      </Route>
    </Switch>
  );
}

export default DeckLayout;