import event from "./eventBus";
//This acts like a publisher - publishing content (message) through `publish` event to modal
export const ModalPublisher = {
  message: (content) => {
    event.publish("showModal", content);
  },
  clearAllMessage: () => {
    event.publish("clearAllMessage");
  },
};
