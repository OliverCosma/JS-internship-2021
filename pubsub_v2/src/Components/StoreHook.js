import { useState, useEffect } from "react";
import { pubsub } from "../pubsub";
import { store } from "./store";

const StoreHook = (event) => {
  const [state, setState] = useState(store.stateVal);
  useEffect(() => {
    pubsub.subscribe(event, () => setState(store.stateVal));
  });

  return [state, store.eventHandler];
};

export default StoreHook;
