import React from "react";

export default function CardDesign() {
  return (
    <div className="project carddesign">
      <h1>Card Design</h1>

      <div className="card">
        <img className="card__image" src="/images/items/RingOriginal 14.png" />
        <span className="card__title">Ring of Rage</span>
        <span className="card__main-stat">+2 Str, +14 HP</span>
        <span className="card__description">
          Ring forged in Malsore by angry goblins.
        </span>
      </div>
    </div>
  );
}
