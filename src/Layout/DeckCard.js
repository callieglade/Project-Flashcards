import React from "react";

function DeckCard({ name, desc }) {

  // TODO: Add Flexbox & Boostrap 4 classes to each element
  
  return (
    <li>
      <div>
        <h3>{name}</h3>
        <p>{/* TODO: number of cards */}</p>
      </div>
      <p>{desc}</p>
      <div>
        <button>View</button>
        <button>Study</button>
        <button>Delete</button>
      </div>
    </li>
  );
}

export default DeckCard;