import { counter } from "../Components/Counter";
import { initStore, store } from "../Components/store";
import { initField } from "../Components/store";

describe("store", () => {
  it("should init the counter", () => {
    initField("counter", 0);
    expect(store.stateVal["counter"]).toEqual(0);
  });
  it("should increase with 2", () => {
    initStore();
    initField("counter", 0);
    store.eventHandler("counter", counter.INCREASE);
    store.eventHandler("counter", counter.INCREASE);
    expect(store.stateVal["counter"]).toBe(2);
  });
  it("should decrease with 1", () => {
    initStore();
    initField("counter", 3);
    store.eventHandler("counter", counter.DECREASE);
    expect(store.stateVal["counter"]).toBe(2);
  });
  it("should decrease with 1", () => {
    initStore();
    initField("counter", 3);
    for (let i = 0; i < 3; i++) {
      store.eventHandler("counter", counter.INCREASE);
    }
    store.eventHandler("counter", counter.RESET);
    expect(store.stateVal["counter"]).toBe(0);
  });
  it("should not go below 0", () => {
    initStore();
    initField("counter", 0);
    store.eventHandler("counter", counter.DECREASE);
    expect(store.stateVal["counter"]).not.toBe(-1); //bcs I set condition to not go for negative numbers
  });
});
