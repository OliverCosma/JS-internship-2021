import React from "react";
import StoreHook from "./StoreHook";
import { counter } from "./Counter";

const Decrease = () => {
  const [, setState] = StoreHook(counter.event);

  return (
    <div>
      <button onClick={() => setState(counter.event, counter.DECREASE)}>
        Remove one item
      </button>
    </div>
  );
};
export default Decrease;
