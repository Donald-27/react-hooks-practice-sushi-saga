
import React from "react";

function Sushi({ sushi, onEatSushi }) {
  const handleClick = () => {
    onEatSushi(sushi.id);
  };

  return (
    <div className="sushi">
      <div className="plate" onClick={handleClick}>
        {/* If sushi is eaten, don't show an image */}
        {sushi.eaten ? null : (
          <img src={sushi.img_url} alt={sushi.name} width="100%" />
        )}
      </div>
      <h4 className="sushi-details">
        {sushi.name} - ${sushi.price}
      </h4>
    </div>
  );
}

export default Sushi;
