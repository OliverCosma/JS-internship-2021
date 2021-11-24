// These are the events - responsible for passing messages around by event actions (subs - publish)
export const eventType = {
  showModal: "showModal",
  clearAllMessage: "clearAllMessage",
  toShowContent: "toShowContent",
};

const event = {
  list: new Map(),
  subs(eventType, eventAction) {
    this.list.has(eventType) || this.list.set(eventType, []);
    if (this.list.get(eventType)) this.list.get(eventType).push(eventAction);
    return this;
  },

  publish(eventType, ...args) {
    this.list.get(eventType) &&
      this.list.get(eventType).forEach((cb) => {
        cb(...args);
      });
  },
};

export default event;
