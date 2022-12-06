import React from "react";
import useModal from "../../Modals/useModal";
import editar from "../../images/editar.png";


function EditProducts() {
  const [isOpenModal, openModal, closeModal] = useModal(false);

  return (
    <td>
      <img
        onClick={openModal}
        style={{ height: "20px", width: "20px" }}
        src={editar}
        alt="editar"
      />
      {/* <ModalProducts
        title="Editar Producto"
        isOpen={isOpenModal}
        closeModal={closeModal}
      ></ModalProducts> */}
    </td>
  );
}

export { EditProducts };
