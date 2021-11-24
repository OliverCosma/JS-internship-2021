import React from "react";
import Hook from "./Hook";
import { counter } from "./Counter";
import './CardComponent.css'
const Decrease = () => {
  const [, setState] = Hook(counter.event);

  return (
    <div>
      <button class="button2" onClick={() => setState(counter.event, counter.DECREASE)}>
        Remove one item
      </button>
    </div>
  );
};
export default Decrease;
