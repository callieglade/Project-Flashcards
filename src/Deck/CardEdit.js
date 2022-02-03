import React, { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import { readDeck, readCard, createCard, updateCard } from "../utils/api";

function CardEdit({ deck, setDeck, isNew }) {
  const [card, setCard] = useState({});
  const history = useHistory();
  const { deckId, cardId } = useParams();

  useEffect(() => {
    const abortController = new AbortController();
    readDeck(deckId, abortController.signal)
    .then(setDeck)
    return () => abortController.abort();
  }, [deckId, setDeck]);

  useEffect(() => {
    const abortController = new AbortController();
    readCard(cardId, abortController.signal)
    .then(setCard);
  }, [cardId, setCard]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const abortController = new AbortController();

    const formData = new FormData(e.target);
    const updatedCard = {
      front: formData.get("front"),
      back: formData.get("back"),
      deckId: card.deckId,
      id: card.id,
    };

    updateCard(updatedCard, abortController.signal)
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
      <h2>{deck.name}: { isNew ? `Add Card` : `Edit Card` }</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Front</label>
          <textarea
            id="front"
            type="text"
            name="front"
            className="form-control"
            placeholder="Front side of card"
            defaultValue={ isNew ? `` : card.front }
            required
          />
        </div>
        <div className="form-group">
          <label>Back</label>
          <textarea
            id="back"
            name="back"
            className="form-control"
            placeholder="Back of the card"
            defaultValue={ isNew ? `` : card.back }
            required
          />
        </div>
        <div className="row">
          <button 
            type="button" 
            className="btn btn-secondary m-3" 
            onClick={() => history.push(`/decks/${deck.id}`)}
            >{ isNew ? `Done` : `Cancel` }
          </button>
          <button 
            type="submit" 
            className="btn btn-primary my-3"
            >{ isNew ? `Save` : `Submit` }
          </button>
        </div>
      </form>
    </div>
  );
}

export default CardEdit;