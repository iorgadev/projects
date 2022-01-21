import React from "react";
import Image from "next/image";
import Nav from "../../../components/planets/Nav";
import Stat from "../../../components/planets/Stat";

function FullPageUI() {
  return (
    <div className="planet">
      <Nav />

      <div className="content">
        <div className="content__picture">
          <Image
            src="/images/planets/planet-earth.svg"
            alt="Earth"
            layout="responsive"
            width={520}
            height={520}
          />
        </div>

        <div className="content__info">
          <div className="content__info__details">
            <h1>Earth</h1>
            <span>
              Earth is the third planet from the Sun and the only astronomical
              object known to harbor and support life. About 29.2% of Earth's
              surface is land consisting of continents and islands. The
              remaining 70.8% is covered with water.
            </span>
            <div className="sourcelink">
              <span className="sourcelink__title">Source:</span>{" "}
              <span className="sourcelink__link">Wikipedia</span>
            </div>
          </div>

          <ul className="content__info__submenu">
            <li className="active">Overview</li>
            <li>Structure</li>
            <li>Surface</li>
          </ul>
        </div>
      </div>

      <div className="stats">
        <Stat title="Rotation Time" stat="1.00 day" />
        <Stat title="Revolution Time" stat="365 days" />
        <Stat title="Radius" stat="6,371 KM" />
        <Stat title="Average Temp" stat="16C" />
      </div>
    </div>
  );
}

export default FullPageUI;
