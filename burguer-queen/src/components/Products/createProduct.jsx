import React from "react";
import "../../Modals/modal.css";
import useModal from "../../Modals/useModal";

function CreateProduct() {
    const [isOpenModal, openModal, closeModal] = useModal(false);

    function handledSubmit(e){
      e.preventDefault();
      closeModal();
    }

  return (
    <div className="containerCreateProduct">
        <h3 className="titleCreateUser">¿Nuevo Producto?</h3>
      <button className="btnCreateUser" onClick={openModal}>Crear producto</button>
      <div className={`modal ${isOpenModal && "modal-open"}`}>
      <form className="formModal" onSubmit={handledSubmit}>
        <button className="closeModal" onClick={closeModal}>
          X
        </button>
        <h1>Crear Producto</h1>
        <label>Nombre</label>
        <input placeholder="" />
        <label>Precio</label>
        <input placeholder="" />
        <label>Imagen</label>
        <input placeholder="" />
        <label>Tipo</label>
        <input placeholder="" />
        <button>Finalizar</button>
      </form>
    </div>
    </div>
  );
}

export { CreateProduct};