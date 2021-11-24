import React, { useState, useEffect } from "react"; 
import styled from "styled-components";
import event from "./eventBus";
// This modal acts as a subscriber - it `subscribes` to data coming through events from publisher ModalPublish
const Container = styled.div`
  display: grid;
  place-content: center;
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgb(0, 0, 0);
  background-color: rgba(0, 0, 0, 0.4);
`;

export const Modal = () => {
  const [content, setContent] = useState("no content");
  const [showModal, setShowModal] = useState(false);

  const setMessage = (message) => {
    setContent(message);
    setShowModal(true);
  };
  const clearMessage = () => {
    setContent("");
    setShowModal(false);
  };

  useEffect(() => {
    event.subs("showModal", setMessage).subs("clearAllMessage", clearMessage);
  }, []);

  if (showModal) {
    return (
      <Container>
        <h2>{content}</h2>
        <button onClick={clearMessage}>Close Modal </button>
      </Container>
    );
  }
  return null;
};
