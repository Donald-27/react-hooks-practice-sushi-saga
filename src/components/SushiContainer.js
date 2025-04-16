
import React from "react";
import Sushi from "./Sushi";
import MoreButton from "./MoreButton";

function SushiContainer({ sushis, onEatSushi, onMoreSushi }) {
  return (
    <div className="belt">
      {sushis.map((sushi) => (
        <Sushi key={sushi.id} sushi={sushi} onEatSushi={onEatSushi} />
      ))}
      <MoreButton onMoreSushi={onMoreSushi} />
    </div>
  );
}

export default SushiContainer;
