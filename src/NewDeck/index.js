import React from "react";
import { useHistory } from "react-router-dom";

function NewDeck() {
  const history = useHistory();

  return (
    <div>
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item text-primary" onClick={() => history.push(`/`)}>Home</li>
          <li className="breadcrumb-item active">Create Deck</li>
        </ol>
      </nav>
      <h2>Create Deck</h2>
      <form>
        <div className="form-group">
          <label for="name">Name</label>
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
          <label for="description">Description</label>
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