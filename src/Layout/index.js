import React from "react";
import { Route, Switch } from "react-router";
import Header from "./Header";
import Home from "./Home";
import Deck from "../Deck/Deck";
import NewDeck from "../NewDeck/NewDeck";
import Study from "../Study/Study";
import NotFound from "./NotFound";

function Layout() {
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
            <Deck />
          </Route>
          <Route path={`/decks/:deckId/study`}>
            <Study />
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
