import React from "react";
import { Switch, Route, useRouteMatch } from "react-router-dom";
import Deck from "./Deck";
import Edit from "./Edit";
import Study from "../Study";
import CardEdit from "./CardEdit";
import CardAdd from "./CardAdd";

function DeckLayout({ deck, setDeck }) {
  const { path } = useRouteMatch();

  return (
    <Switch>
      <Route exact path={`${path}`}>
        <Deck deck={deck} setDeck={setDeck} />
      </Route>
      <Route path={`${path}/edit`}>
        <Edit deck={deck} setDeck={setDeck} />
      </Route>
      <Route path={`${path}/study`}>
        <Study deck={deck} setDeck={setDeck} />
      </Route>
      <Route path={`${path}/cards/new`}>
        <CardAdd deck={deck} setDeck={setDeck} isNew={true} />
      </Route>
      <Route path={`${path}/cards/:cardId/edit`}>
        <CardEdit deck={deck} setDeck={setDeck} isNew={false} />
      </Route>
    </Switch>
  );
}

export default DeckLayout;