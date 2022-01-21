import React, { useState } from "react";

function MultiRangeSlider() {
  const [startValue, setStartValue] = useState(0);
  const [endValue, setEndValue] = useState(0);

  const handleStartValue = (e) => {
    setStartValue(e.target.value);
  };
  const handleEndValue = (e) => {
    setEndValue(e.target.value);
  };

  return (
    <div className="project multirangeslider">
      <h1>Multi Range</h1>
      <div className="container">
        <input
          id="startRange"
          type="range"
          value={startValue}
          min="0"
          max="100"
          name="startRange"
          onChange={(e) => handleStartValue(e)}
        />

        <input
          id="endRange"
          type="range"
          value={endValue}
          min="0"
          max="100"
          name="endRange"
          onChange={(e) => handleEndValue(e)}
        />
      </div>
    </div>
  );
}

export default MultiRangeSlider;
