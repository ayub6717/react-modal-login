import React, { useState } from "react";
import Modal from "react-modal";
import "./LoginComp.css";

Modal.setAppElement("#root");

function LoginComp() {
  const [modalIsOpen, setModalIsOpen] = useState(true);

  const customStyles = {
    content: {
      height: "500px",
      width: "450px",
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      backgroundColor: "cadetblue",
      border: 0
    },
    overlay : {
        backgroundColor: "rgba(0,0,0,0.5)" // Fourth parameter is for opacity
    }
  };

  return (
    <div className="login">
      <button onClick={() => setModalIsOpen(true)}>login</button>

      <Modal
        isOpen={modalIsOpen}
        style={customStyles}
        onRequestClose={() => setModalIsOpen(false)}
      >
        <div className="openModal">
          <button className="close" onClick={() => setModalIsOpen(false)}>
            x
          </button>
          <input
            className="form-control my-4"
            type="text"
            placeholder="Enter Your username"
          />
          <input
            className="form-control my-4"
            type="text"
            placeholder="Enter Your Password"
          />
          <button
            onClick={() => setModalIsOpen(false)}
            className="btn btn-primary"
          >
            Login
          </button>
        </div>
      </Modal>
    </div>
  );
}

export default LoginComp;
