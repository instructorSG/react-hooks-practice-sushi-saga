import React, { useState } from "react";
import MoreButton from "./MoreButton";
import Sushi from './Sushi'

function SushiContainer({ sushiList,whenEaten }) {
  const [ listIndex, setListIndex ] = useState(0)

  const sushis = sushiList.slice(listIndex, listIndex+4)
    .map((s) =>
      <Sushi
        key={ s.id }
        sushi={ s }
        whenEaten={ whenEaten } />)

  const incrementIndex = () => {
    setListIndex((listIndex + 4) % sushiList.length)
  }

  return (
    <div className="belt">
      {sushis}
      <MoreButton  incrementIndex={ incrementIndex } />
    </div>
  );
}

export default SushiContainer;
