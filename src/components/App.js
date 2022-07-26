import React, { useEffect, useState } from "react";
import SushiContainer from "./SushiContainer";
import Table from "./Table";

const API = "http://localhost:3001/sushis";

function App() {
  const [ sushiList, setSushiList ] = useState([])
  const [ bal, setBal ] = useState(100)
  const [ plates, setPlates ] = useState([])

  const sushiEaten = (s) => {
    setPlates(prevPlates => [ ...prevPlates, s ])
    setBal(prevBal => prevBal - s.price)
  }

  useEffect(() => {
    fetch(API)
      .then(resp => resp.json())
      .then(sushis => {
        const updatedSushis = sushis.map((s) => {
          return { ...s, eaten: false }
        })
        setSushiList(updatedSushis)
  })
}, [])

  return (
    <div className="app">
      <SushiContainer
        sushiList={ sushiList }
        whenEaten={ sushiEaten }
      />
      <Table  plates={ plates } balance={ bal } />
    </div>
  );
}

export default App;
