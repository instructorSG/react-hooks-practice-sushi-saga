import React from "react";
import { Fragment } from "react/cjs/react.production.min";
import Wallet from "./Wallet";

function Table({ plates , balance }) {

  const emptyPlates = plates.map((plate, index) => (
    <div key={index} className="empty-plate" style={{ top: -7 * index }} />
  ));

  return (
    <Fragment>
      <h1 className="remaining">
        You have: ${balance} remaining!
      </h1>
      <div className="remaining">

        <Wallet />
</div>

      <div className="table">
        <div className="stack">{emptyPlates}</div>
      </div>
    </Fragment>
  );
}

export default Table;
