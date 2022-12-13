import React from "react";
import useModal from "../../Modals/useModal";
import editar from "../../images/editar.png";
import Delete from "../../images/delete.png";

function EditProducts() {
  const [isOpenModal, openModal, closeModal] = useModal(false);

  function handledSubmit(e) {
    e.preventDefault();
    closeModal();
  }

  return (
    <td>
      <img
        onClick={openModal}
        style={{ height: "20px", width: "20px" }}
        src={editar}
        alt="editar"
      />

      <img
        onClick={openModal}
        style={{ height: "20px", width: "20px" }}
        src={Delete}
        alt="delete"
      />
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
    </td>
  );
}

export { EditProducts };
