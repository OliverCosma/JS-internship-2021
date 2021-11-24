import { pubsub } from "../pubsub";

describe("pubsub", () => {
  it("should subscribe", () => {
    const cb = jest.fn();
    pubsub.subscribe("event", cb);
    pubsub.publish("event");
    expect(cb).toHaveBeenCalled();
  });

  it("should publish with payload", () => {
    const cb = jest.fn();
    const payload = { counter: 0 };
    pubsub.subscribe("event", cb);
    pubsub.publish("event", payload);

    expect(cb).toHaveBeenCalledWith(payload);
  });

  it("should return unsubscribe", () => {
    const cb = jest.fn();
    pubsub.subscribe("event", cb);
    expect(cb).toHaveBeenCalledTimes(0);
  });
});
