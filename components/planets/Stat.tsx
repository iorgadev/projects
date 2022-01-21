import React from "react";

interface PlanetStat {
  title: string;
  stat: number | string;
}

function Stat({ title, stat }: PlanetStat) {
  return (
    <div>
      <span>{title}</span>
      <span>{stat}</span>
    </div>
  );
}

export default Stat;
