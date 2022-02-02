import React, { useState } from "react";
import { Route, Switch } from "react-router";
import Header from "./Header";
import Home from "./Home";
import Deck from "../Deck";
import NewDeck from "../NewDeck";
import Study from "../Study";
import NotFound from "./NotFound";

function Layout() {
  const [deck, setDeck] = useState({id: 0});

  return (
    <>
      <Header />
      <div className="container">
        {/* TODO: Implement the screen starting here */}
        <Switch>
          <Route exact path={`/`}>
            <Home />
          </Route>
          <Route path={`/decks/new`}>
            <NewDeck />
          </Route>
          <Route exact path={`/decks/:deckId`}>
            <Deck deck={deck} setDeck={setDeck} />
          </Route>
          <Route path={`/decks/:deckId/study`}>
            <Study deck={deck} setDeck={setDeck} />
          </Route>
          <Route>
            <NotFound />
          </Route>
        </Switch>
      </div>
    </>
  );
}

export default Layout;
