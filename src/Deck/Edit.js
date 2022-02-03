import React from "react";
import { useHistory } from "react-router-dom";
import { updateDeck } from "../utils/api";

function Edit({ deck, setDeck }) {
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    const abortController = new AbortController();

    const formData = new FormData(e.target);
    const updatedDeck = {
      name: formData.get("name"),
      description: formData.get("description"),
    };

    updateDeck(updatedDeck, abortController.signal)
    .then((deck) => {
      setDeck(deck);
      history.push(`/decks/${deck.id}`);
    });
  }

  return (
    <div>
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item text-primary" onClick={() => history.push(`/`)}>Home</li>
          <li className="breadcrumb-item text-primary" onClick={() => history.push(`/decks/${deck.id}`)}>{deck.name}</li>
          <li className="breadcrumb-item active">Edit Deck</li>
        </ol>
      </nav>
      <h2>Edit Deck</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Name</label>
          <input
            id="name"
            type="text"
            name="name"
            className="form-control"
            placeholder="Deck Name"
            defaultValue={deck.name}
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
            defaultValue={deck.description}
            required
          />
        </div>
        <div className="row">
          <button type="button" className="btn btn-secondary m-3" onClick={() => history.push(`/decks/${deck.id}`)}>Cancel</button>
          <button type="submit" className="btn btn-primary my-3" onClick={handleSubmit}>Submit</button>
        </div>
      </form>
    </div>
  );
}

export default Edit;