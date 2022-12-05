import React, { useState } from "react";
import ModalCreateUsers from "../Modals/modalCreateUser";
import useModal from "../Modals/useModal";
import { createUser } from "../utils/petitions";

function CreateUsers() {

  return (
    <div>
      <h3 className="titleCreateUser">¿Nuevo Usuario?</h3>
      <button className="btnCreateUser" onClick={openModal}>
        Crear usuario
      </button>
      <ModalCreateUsers
        title="Nuevo Usuario"
        isOpen={isOpenModal}
        closeModal={closeModal}
      ></ModalCreateUsers>
    </div>
  );
}

export { CreateUsers };
