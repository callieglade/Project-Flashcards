import React from "react";
import { useHistory } from "react-router";

function CardForm({ deck, card, isNew, handleSubmit }) {
  const history = useHistory();

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

export default CardForm;