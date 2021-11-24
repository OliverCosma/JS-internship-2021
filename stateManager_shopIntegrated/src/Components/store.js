import { pubsub } from "../pubsub";

let state = {
  counter: 0,
};

const getLocalStorage = () => {
  const localState = JSON.parse(localStorage.getItem("count"));
  state = { ...state, ...localState };
};

const setLocalStorage = () => {
  localStorage.setItem("count", JSON.stringify(state));
};
getLocalStorage();

export const store = {
  set stateVal(newValue) {
    state = { ...newValue };
  },

  get stateVal() {
    return state;
  },

  eventHandler: function (event, action) {
    state = action.handler(state);
    setLocalStorage();
    pubsub.publish(event, state);
  },
};