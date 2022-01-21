import React, { useState, useRef } from "react";

function HiddenSearch() {
  const [active, setActive] = useState(false);

  let search = useRef(null);

  const toggleSearch = () => {
    setActive(!active);
    if (!active) search.current.focus();
  };

  return (
    <div className="project hiddensearch">
      <h1>hidden search</h1>

      <div className="searchcontainer">
        <input
          ref={search}
          type="text"
          placeholder="Search..."
          className={active ? `active` : ``}
        />
        <button
          onClick={() => toggleSearch()}
          className={`hover:bg-purp-700 ${active ? `active` : ``}`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}

export default HiddenSearch;
