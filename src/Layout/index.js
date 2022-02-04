import React, { useState } from "react";
import { Route, Switch } from "react-router";
import Header from "./Header";
import Home from "./Home";
import DeckLayout from "../Deck";
import NewDeck from "../NewDeck";
import NotFound from "./NotFound";

function Layout() {
  const [deck, setDeck] = useState({});

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
          <Route path={`/decks/:deckId`}>
            <DeckLayout deck={deck} setDeck={setDeck} />
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
