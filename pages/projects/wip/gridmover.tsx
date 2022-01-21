import React from "react";

function GridMover() {
  let map;
  let xSize = 10;
  let ySize = 12;

  console.log(xSize);

  const tiles = () => {
    let map = [];
    for (let x = 0; x < xSize; x++) {
      map[x] = [];
      for (let y = 0; y < ySize; y++) {
        map[x][y] = <Tile x={x} y={y} />;
      }
    }

    return map;
  };
  map = tiles();

  return (
    <div className="bg-gray-900 project">
      <div className="map">
        {map.map((e: Array<number>) => {
          return e.map((tile) => {
            return tile;
          });
        })}
      </div>
    </div>
  );
}

function Tile({ x, y }) {
  return <div className="tile grass">{x}</div>;
}

export default GridMover;
