import React from "react";
import Modal from "../Modals/modal";
import useModal from "../Modals/useModal";
import editar from "../images/editar.png";

function ModalUsers() {
  const [isOpenModal, openModal, closeModal] = useModal(false);

  return (
    <td>
      <img
        onClick={openModal}
        style={{ height: "20px", width: "20px" }}
        src={editar}
        alt="editar"
      />
      <Modal
        title="Editar Usuarios"
        space1="Role"
        space2="Correo"
        space3="Contraseña"
        isOpen={isOpenModal}
        closeModal={closeModal}
      ></Modal>
    </td>
  );
}

export { ModalUsers };
