import React from "react";
import Hook from "./Hook";
import { counter } from "./Counter";
import './NavbarComponent.css'
const Remove = () => {
  const [, setState] = Hook(counter.event);

  return (
    <div >
      <p class="nav_logo2 bar_logo2" onClick={() => setState(counter.event, counter.REMOVE)}>
        Remove entire list
      </p>
    </div>
  );
};
export default Remove;
