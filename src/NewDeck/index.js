import React from "react";
import { useHistory } from "react-router-dom";
import { createDeck } from "../utils/api";

function NewDeck() {
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    const abortController = new AbortController();

    const formData = new FormData(e.target);
    const newDeck = {
      name: formData.get("name"),
      description: formData.get("description"),
    };

    createDeck(newDeck, abortController.signal)
    .then((deck) => history.push(`/decks/${deck.id}`));
  }

  return (
    <div>
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item text-primary" onClick={() => history.push(`/`)}>Home</li>
          <li className="breadcrumb-item active">Create Deck</li>
        </ol>
      </nav>
      <h2>Create Deck</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Name</label>
          <input
            id="name"
            type="text"
            name="name"
            className="form-control"
            placeholder="Deck Name"
            required
          />
        </div>
        <div className="form-group">
          <label>Description</label>
          <textarea
            id="description"
            name="description"
            className="form-control"
            placeholder="Brief description of the deck"
            required
          />
        </div>
        <div className="row">
          <button type="button" className="btn btn-secondary m-3" onClick={() => history.push(`/`)}>Cancel</button>
          <button type="submit" className="btn btn-primary my-3">Submit</button>
        </div>
      </form>
    </div>
  );
}

export default NewDeck;