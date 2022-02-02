import React from "react";
import { useHistory } from "react-router";

function Deck() {
  const history = useHistory();
  
  return (
    <div>
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item text-primary" onClick={() => history.push(`/`)}>Home</li>
          <li className="breadcrumb-item active">Deck Name</li>
        </ol>
      </nav>
    </div>
  );
}

export default Deck;