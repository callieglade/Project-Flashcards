import React from "react";
import { Switch, Route } from "react-router-dom";
import Deck from "./Deck";
import Edit from "./Edit";

function DeckLayout({ deck, setDeck }) {
  return (
    <Switch>
      <Route exact path={`/decks/:deckId`}>
        <Deck deck={deck} setDeck={setDeck} />
      </Route>
      <Route path={`/decks/:deckId/edit`}>
        <Edit deck={deck} setDeck={setDeck} />
      </Route>
    </Switch>
  );
}

export default DeckLayout;