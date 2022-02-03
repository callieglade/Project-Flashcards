import React, { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import { readDeck, readCard, updateCard } from "../utils/api";
import CardForm from "./CardForm";

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
    <CardForm deck={deck} card={card} isNew={false} handleSubmit={handleSubmit} />
  );
}

export default CardEdit;