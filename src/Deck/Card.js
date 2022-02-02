import React from "react";

function Card({ card }) {
  return (
    <div className="card">
      <div className="row">
        <p className="col">{card.front}</p>
        <p className="col">{card.back}</p>
      </div>
      <div className="row">
        <button type="button">Edit</button>
        <button type="button">Delete</button>
      </div>
    </div>
  );
}

export default Card;