import React, { useState, useEffect } from "react";
import Modal from "react-modal";
import "./LoginComp.css";

Modal.setAppElement("#root");

function LoginComp() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [windowWidth, setwindowWidth] = useState(0);

  useEffect(() => {
    window.addEventListener("resize", () => {
      setwindowWidth(document.body.clientWidth);
    });
  },[]);

  const customStyles = {
    content: {
      height: "500px",
      width: "520px",
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      backgroundColor: "rgb(26, 110, 131)",
      border: " 2px solid rgb(12, 85, 98)",
    },
    overlay: {
      backgroundColor: "rgba(0,0,0,0.5)", // Fourth parameter is for opacity
    },
  };

  if (windowWidth < 520) {
    customStyles.content.width = "300px"; 
  }
  
  return (
    <div className="login">
      <button onClick={() => setModalIsOpen(true)}>
        <i className="fa fa-sign-in" aria-hidden="true"></i> login here
      </button>

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
          <button onClick={() => setModalIsOpen(false)} className="btn">
            Login
          </button>
        </div>
      </Modal>
    </div>
  );
}

export default LoginComp;
