import React from "react";
import Hook from "./Hook";
import { counter } from "./Counter";
import './CardComponent.css'
const Increase = () => {
  const [, setState] = Hook(counter.event);

  return (
    <div>
      <button class="button2" onClick={() => setState(counter.event, counter.INCREASE)}>
        Add one item
      </button>
    </div>
  );
};
export default Increase;
