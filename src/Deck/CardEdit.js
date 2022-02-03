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