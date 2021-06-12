import React, { useState } from "react";

function CardExpander() {
  const [active, setActive] = useState(1);

  return (
    <div className="project expander">
      <h1>Card Expander</h1>
      <div className="cards">
        <div
          onClick={() => setActive(1)}
          className={`image${1} ${active === 1 ? `active` : ``}`}
        ></div>
        <div
          onClick={() => setActive(2)}
          className={`image${2} ${active === 2 ? `active` : ``}`}
        ></div>
        <div
          onClick={() => setActive(3)}
          className={`image${3} ${active === 3 ? `active` : ``}`}
        ></div>
        <div
          onClick={() => setActive(4)}
          className={`image${4} ${active === 4 ? `active` : ``}`}
        ></div>
        <div
          onClick={() => setActive(5)}
          className={`image${5} ${active === 5 ? `active` : ``}`}
        ></div>
      </div>
    </div>
  );
}

export default CardExpander;
