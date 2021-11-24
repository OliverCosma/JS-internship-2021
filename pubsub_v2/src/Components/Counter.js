export const counter = {
  event: "counter",
  INCREASE: {
    handler: function (state) {
      if ("counter" in state) {
        return { ...state, counter: state["counter"] + 1 };
      }
    },
  },
  DECREASE: {
    handler: function (state) {
      if ("counter" in state && state["counter"] > 0) {
        return { ...state, counter: state["counter"] - 1 };
      } else {
        return { ...state, counter: state["counter"] };
      }
    },
  },
  RESET: {
    handler: function (state) {
      if ("counter" in state) {
        return { ...state, counter: 0 };
      }
    },
  },
};
