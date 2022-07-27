import React, {useState} from "react";

function Sushi({ sushi, whenEaten }) {
  const { name, img_url, price, eaten } = sushi

  const handleClick = () => {
    if (!eaten) {
      whenEaten(sushi)
    } else {
      alert('Sushi was eaten already...')
    }
  }

  return (
    <div className="sushi">
      <div className="plate" onClick={handleClick}>
        {/* setEaten(false) */}
        {eaten ? null : (
          <img
            src={img_url}
            alt={name}
            width="100%"
          />
        )}
      </div>
      <h4 className="sushi-details">
        {name} - ${price}
      </h4>
    </div>
  );
}

export default Sushi;
