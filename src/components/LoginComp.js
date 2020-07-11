import React, { useState } from "react";
import Modal from "react-modal";
import "./LoginComp.css";

function LoginComp() {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  return (
    <div className="login">
      <button onClick={() => setModalIsOpen(true)}>login</button>

      <Modal isOpen={modalIsOpen}>
        <button className="close" onClick={() => setModalIsOpen(false)}>close</button>
        <h1>I am from Modal</h1>
      </Modal>
    </div>
  );
}

export default LoginComp;
