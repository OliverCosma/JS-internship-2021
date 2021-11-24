import React from "react";
import { counter } from "./Counter";
import StoreHook from "./StoreHook";

const Reset = () => {
  const [, setState] = StoreHook(counter.event);

  return (
    <div>
      <button onClick={() => setState(counter.event, counter.RESET)}>
        Reset counter
      </button>
    </div>
  );
};
export default Reset;
