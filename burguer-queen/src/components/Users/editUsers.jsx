import React, { useState } from "react";
import editar from "../../images/edit.png";
import Delete from "../../images/delete.png";
import useModal from "../../Modals/useModal";
import { editUser } from "../../utils/petitions";
import Swal from "sweetalert2";

function EditUsers({ email, role, id }) {
  const [editDataUser, setEditDataUser] = useState({
    email: email,
    role: role,
    id: id,
  });

  const [isOpenModal, openModal, closeModal] = useModal(false);

  const handleChangeEdit = (e) => {
    setEditDataUser({
      ...editDataUser,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmitEdit = (e) => {
    e.preventDefault();
    editUser(editDataUser)
      .then((res) => {
        localStorage.setItem("userUpdate", JSON.stringify(res.data));
        if (res.status === 201) {
          Swal.fire("Good job!", "You clicked the button!", "success");
        }
        console.log(res.status);
        closeModal;
      })
      .catch((error) => {
        console.log(error);
        Swal.fire("Error!", "Tenemos un problema, intenta de nuevo", "error");
      });
  };

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
        <form className="formModal" onSubmit={handleSubmitEdit}>
          <button className="closeModal" onClick={closeModal} type="button">
            X
          </button>
          <h1>Editar Usuarios</h1>
          <label>Role</label>
          <input
            type="text"
            name="role"
            placeholder="Ingrese role"
            value={editDataUser.role}
            onChange={handleChangeEdit}
          />
          <label>Correo</label>
          <input
            type="text"
            name="email"
            placeholder="Ingrese e-mail"
            value={editDataUser.email}
            onChange={handleChangeEdit}
          />
          <label>Contraseña</label>
          <input
            type="text"
            name="password"
            placeholder="Ingrese Password"
            onChange={handleChangeEdit}
          />
          <button type="submit">Finalizar</button>
        </form>
      </div>
    </td>
  );
}

export { EditUsers };
