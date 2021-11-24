import React from "react";
import StoreHook from "./StoreHook";
import { counter } from "./Counter";

const Increase = () => {
  const [, setState] = StoreHook(counter.event);

  return (
    <div>
      <button onClick={() => setState(counter.event, counter.INCREASE)}>
        Add to Cart
      </button>
    </div>
  );
};
export default Increase;
