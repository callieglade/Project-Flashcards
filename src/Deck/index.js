import React, { useEffect } from "react";
import { Switch, Route, useParams } from "react-router-dom";
import { readDeck } from "../utils/api";
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