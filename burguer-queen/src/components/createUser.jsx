import React, { useState } from "react";
import Modal from "../Modals/modal";
import useModal from "../Modals/useModal";
import { createUser } from "../utils/petitions";

function CreateUsers() {

  const [isOpenModal, openModal, closeModal] = useModal(false);
  const [newEmail, setNewEmail] = useState([]);
  const [newPassword, setNewPassword] = useState([]);
  const [newRole, setNewRole] = useState([]);

  createUser()
    .then((res) => {
      console.log(res.data);
    })
    .catch((error) => console.log(error));

  return (
    <div>
      <h3 className="titleCreateUser">¿Nuevo Usuario?</h3>
      <button className="btnCreateUser" onClick={openModal}>
        Crear usuario
      </button>
      <Modal
        title="Nuevo Usuario"
        isOpen={isOpenModal}
        closeModal={closeModal}
      ></Modal>
    </div>
  );
}

export { CreateUsers };
