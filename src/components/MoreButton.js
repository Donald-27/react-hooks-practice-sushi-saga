
import React from "react";

function MoreButton({ onMoreSushi }) {
  return (
    <button className="more-button" onClick={onMoreSushi}>
      More sushi!
    </button>
  );
}

export default MoreButton;
