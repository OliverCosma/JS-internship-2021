  
export const pubsub = {
  subscribers: {},
  publish: function (eventName, data) {
    if (!this.subscribers[eventName]) return;
    this.subscribers[eventName].forEach((subscriberCallback) =>
      subscriberCallback(data)
    );
  },
  
  subscribe(eventName, callback) {
    let index;
    if (!this.subscribers[eventName]) {
      this.subscribers[eventName] = [];
    }
    index = this.subscribers[eventName].push(callback) - 1;
    return {
      unsubscribe() {
        this.subscribers[eventName].splice(index, 1);
      },
    };
  },
};
