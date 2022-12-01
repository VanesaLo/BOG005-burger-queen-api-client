import React from "react";
import ModalProducts from "../Modals/modalProducts"
import useModal from "../Modals/useModal";

function CreateProduct() {
    const [isOpenModal, openModal, closeModal] = useModal(false);

  return (
    <div>
        <h3 className="titleCreateUser">¿Nuevo Producto?</h3>
      <button className="btnCreateUser" onClick={openModal}>Crear producto</button>
      <ModalProducts
        title="Producto Nuevo"
        isOpen={isOpenModal}
        closeModal={closeModal}
      ></ModalProducts>
    </div>
  );
}

export { CreateProduct};