import React from "react";
import Modal from "../Modals/modal"
import useModal from "../Modals/useModal";

function CreateUser() {
    const [isOpenModal, openModal, closeModal] = useModal(false);

  return (
    <div>
        <h3 className="titleCreateUser">¿Nuevo Usuario?</h3>
      <button className="btnCreateUser" onClick={openModal}>Crear usuario</button>
      <Modal
        title="Nuevo Usuario"
        isOpen={isOpenModal}
        closeModal={closeModal}
      ></Modal>
    </div>
  );
}

export { CreateUser};
