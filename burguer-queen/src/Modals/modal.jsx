import React from "react";
import "./modal.css";

const Modal = ({ isOpen, closeModal, children, title }) => {
  
  return (
    <div className={`modal ${isOpen && "modal-open"}`}>
      <form className="formModal">
        <button className="closeModal" onClick={closeModal}>
          X
        </button>
        <h1>{title}</h1>
        <label>Role</label>
        <input placeholder="" />
        <label>Correo</label>
        <input placeholder="" />
        <label>Contraseña</label>
        <input placeholder="" />
        <button>Finalizar</button>
        {children}
      </form>
    </div>
  );
};

export default Modal;
