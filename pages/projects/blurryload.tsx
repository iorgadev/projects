import React, { useEffect, useState } from "react";

function BlurryLoad() {
  const [load, setLoad] = useState(0);

  const percent = () => setLoad(load + 1);

  useEffect(() => {
    if (load >= 100) {
      return;
    }
    const loaded = setInterval(percent, 6);
    return () => {
      clearInterval(loaded);
    };
  }, [load]);

  return (
    <div className="blurryload project">
      <h1>blurry load</h1>

      <div className="image" style={{ filter: `blur(${100 - load}px)` }}></div>

      <span className="loadpercent">{load}%</span>
    </div>
  );
}

export default BlurryLoad;
