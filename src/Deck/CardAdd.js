import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { readDeck, createCard } from "../utils/api";
import CardForm from "./CardForm";

function CardAdd({ deck, setDeck }) {
  const { deckId } = useParams();

  useEffect(() => {
    const abortController = new AbortController();
    readDeck(deckId, abortController.signal)
    .then(setDeck)
    return () => abortController.abort();
  }, [deckId, setDeck]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const abortController = new AbortController();

    const formData = new FormData(e.target);
    const updatedCard = {
      front: formData.get("front"),
      back: formData.get("back"),
      deckId: deck.id,
    };

    createCard(deck.id, updatedCard, abortController.signal)
    .then(e.target.reset());
  }

  return (
    <CardForm deck={deck} card={{}} isNew={true} handleSubmit={handleSubmit} />
  );
}

export default CardAdd;