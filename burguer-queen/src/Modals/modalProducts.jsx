import React from "react";
import "./modal.css";

const ModalProducts = ({ isOpen, closeModal, children, title }) => {

  function handledSubmit(e){
    e.preventDefault();
    closeModal();
  }

  return (
    <div className={`modal ${isOpen && "modal-open"}`}>
      <form className="formModal" onSubmit={handledSubmit}>
        <button className="closeModal" onClick={closeModal}>
          X
        </button>
        <h1>{title}</h1>
        <label>Nombre</label>
        <input placeholder="" />
        <label>Precio</label>
        <input placeholder="" />
        <label>Imagen</label>
        <input placeholder="" />
        <label>Tipo</label>
        <input placeholder="" />
        <button>Finalizar</button>
        {children}
      </form>
    </div>
  );
};

export default ModalProducts;
