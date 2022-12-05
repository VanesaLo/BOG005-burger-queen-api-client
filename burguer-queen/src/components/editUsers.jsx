import React from "react";
import ModalEdit from "./Modals/ModalEdit";
import useModal from "../Modals/useModal";
import editar from "../images/editar.png";
import { editUser } from "../utils/petitions";

function EditUsers() {
  


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
        isOpen={isOpenModal}
        closeModal={closeModal}
      ></Modal>
    </td>
  );
}

export { EditUsers };
