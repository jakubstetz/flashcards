import React, { useState } from "react";
import { useSelector } from "react-redux";
import { selectCard } from "./cardsSlice"; // My contribution.

export default function Card({ id }) {
  const card = useSelector(selectCard(id)); // My contribution.
  const [flipped, setFlipped] = useState(false);

  return (
    <li>
      <button className="card" onClick={(e) => setFlipped(!flipped)}>
        {flipped ? card.back : card.front}
      </button>
    </li>
  );
}