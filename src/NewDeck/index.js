import React from "react";

function NewDeck() {
  return (
    <div>
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item text-primary" onClick={() => history.push(`/`)}>Home</li>
          <li className="breadcrumb-item active">Create Deck</li>
        </ol>
      </nav>
      <form>
        <fieldset>
          <legend>Create Deck</legend>
          <label for="name">Name</label>
          <input
            id="name"
            type="text"
            name="name"
            placeholder="Deck Name"
            required
          />
          <label for="description">Description</label>
          <textarea
            id="description"
            name="description"
            placeholder="Brief description of the deck"
            required
          />
          <button className="btn btn-primary" type="submit">Submit</button>
        </fieldset>
      </form>
    </div>
  );
}

export default NewDeck;