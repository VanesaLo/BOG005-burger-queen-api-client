import React, { useState } from "react";
import editar from "../images/editar.png";
import useModal from "../Modals/useModal";

function EditUsers({ email, role }) {

  console.log('email in EditUsers', email);

  const [editEmail, setEditEmail] = useState(email)
  const [editRole, setEditRole] = useState(role);

  const [isOpenModal, openModal, closeModal] = useModal(false);

  const handleSubmitEdit = () => {
    
  }

  const handleChangeEdit = () => {

  }

  return (
    <td>
      <img
        onClick={openModal}
        style={{ height: "20px", width: "20px" }}
        src={editar}
        alt="editar"
      />
      <div className={`modal ${isOpenModal && "modal-open"}`}>
        <form className="formModal" onSubmit={handleSubmitEdit}>
          <button className="closeModal" onClick={closeModal} type="button">
            X
          </button>
          <h1>Editar Usuarios</h1>
          <label>Role</label>
          <input type="text"
            name="role"
            placeholder="Ingrese role"
            value={editRole}
            onChange={handleChangeEdit} />
          <label>Correo</label>
          <input type="text"
            name="email"
            placeholder="Ingrese e-mail"
            value={editEmail}
            onChange={handleChangeEdit} />
          <label>Contraseña</label>
          <input type="text"
            name="password"
            placeholder="Ingrese Password"
            onChange={handleChangeEdit} />
          <button type="submit">Finalizar</button>

        </form>
      </div>
    </td>
  );
}

export { EditUsers };
