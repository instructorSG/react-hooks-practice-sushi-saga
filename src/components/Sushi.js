import React, {useState} from "react";

function Sushi({ sushi, whenEaten, plates }) {
  const [ eaten, setEaten ] = useState(false)

  const { name, img_url, price } = sushi
console.log('name',name,'img_url', img_url, 'price', price)

  const handleClick = () => {
    setEaten(true)

    whenEaten(sushi)
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
