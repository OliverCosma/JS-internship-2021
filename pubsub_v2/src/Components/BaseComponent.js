import React from "react";
import StoreHook from "./StoreHook";
import { counter } from "./Counter";
import Increase from "./Increase";
import Decrease from "./Decrease";
import Reset from "./Reset";


const BaseComponent = () => {
  const [state] = StoreHook(counter.event);

  return (
    <div>
      <div>
        <h1> {state.counter} </h1>
        <Increase></Increase>
        <Decrease></Decrease>
        <Reset></Reset>
      </div>
    </div>
  );
};
export default BaseComponent;
