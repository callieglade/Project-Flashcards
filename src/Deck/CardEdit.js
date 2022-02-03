import React from "react";
import { useHistory, useParams } from "react-router-dom";
import { readDeck, updateDeck } from "../utils/api";

function CardEdit({ deck, setDeck, isNew }) {
  const history = useHistory();
  const { deckId } = useParams();

  useEffect(() => {
    const abortController = new AbortController();
    readDeck(deckId, abortController.signal).then(setDeck);
    return () => abortController.abort();
  }, [deckId, setDeck]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const abortController = new AbortController();

    const formData = new FormData(e.target);
    const updatedDeck = {
      name: formData.get("name"),
      description: formData.get("description"),
      id: deck.id,
      cards: deck.cards
    };

    updateDeck(updatedDeck, abortController.signal)
    .then(history.push(`/decks/${deck.id}`));
  }

  return (
    <div>
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item text-primary" onClick={() => history.push(`/`)}>Home</li>
          <li className="breadcrumb-item text-primary" onClick={() => history.push(`/decks/${deck.id}`)}>{deck.name}</li>
          <li className="breadcrumb-item active">{ isNew ? `Add Card` : `Edit Card ${card.id}`}</li>
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
            defaultValue={ isNew ? `` : card.front }
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
            defaultValue={ isNew ? `` : card.back }
            required
          />
        </div>
        <div className="row">
          <button type="button" className="btn btn-secondary m-3" onClick={() => history.push(`/decks/${deck.id}`)}>Cancel</button>
          <button type="submit" className="btn btn-primary my-3">Submit</button>
        </div>
      </form>
    </div>
  );
}

export default CardEdit;