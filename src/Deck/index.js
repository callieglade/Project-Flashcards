import React from "react";
import { Switch, Route } from "react-router-dom";
import Deck from "./Deck";
import Edit from "./Edit";
import Study from "../Study";
import CardEdit from "./CardEdit";
import CardAdd from "./CardAdd";

function DeckLayout({ deck, setDeck }) {
  return (
    <Switch>
      <Route exact path={`/decks/:deckId`}>
        <Deck deck={deck} setDeck={setDeck} />
      </Route>
      <Route path={`/decks/:deckId/edit`}>
        <Edit deck={deck} setDeck={setDeck} />
      </Route>
      <Route path={`/decks/:deckId/study`}>
        <Study deck={deck} setDeck={setDeck} />
      </Route>
      <Route path={`/decks/:deckId/cards/new`}>
        <CardAdd deck={deck} setDeck={setDeck} isNew={true} />
      </Route>
      <Route path={`/decks/:deckId/cards/:cardId/edit`}>
        <CardEdit deck={deck} setDeck={setDeck} isNew={false} />
      </Route>
    </Switch>
  );
}

export default DeckLayout;