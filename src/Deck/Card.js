import React from "react";

function Card({ card }) {
  return (
    <div className="card">
      <div className="row mt-3">
        <p className="col text-center">{card.front}</p>
        <p className="col text-center">{card.back}</p>
      </div>
      <div className="row my-2 mx-2">
        <button type="button" className="btn btn-secondary mx-3">Edit</button>
        <button type="button" className="btn btn-danger">Delete</button>
      </div>
    </div>
  );
}

export default Card;