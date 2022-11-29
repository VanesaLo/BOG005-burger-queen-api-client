import React from "react";
import "./modal.css";

const Modal = ({
  isOpen,
  closeModal,
  children,
  title,
  space1,
  space2,
  space3,
}) => {
  return (
    <div className={`modal ${isOpen && "modal-open"}`}>
      <form className="formModal">
        <button className="closeModal" onClick={closeModal}>
          X
        </button>
        <h1>{title}</h1>
        <label>{space1}</label>
        <input placeholder="" />
        <label>{space2}</label>
        <input placeholder="" />
        <label>{space3}</label>
        <input placeholder="" />
        <button>Finalizar</button>
        {children}
      </form>
    </div>
  );
};

export default Modal;
