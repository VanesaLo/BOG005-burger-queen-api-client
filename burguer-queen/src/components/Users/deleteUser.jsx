import React, { useState } from "react";
import Delete from "../../images/delete.png";
import useModal from "../../Modals/useModal";
import { deleteUser } from "../../utils/petitions";
import Swal from "sweetalert2";


function DeleteUser( {email, role, admiGetUsers, id }) {

  // console.log('email in EditUsers', email);

  const [deleteDataUser, setDeleteDataUser]= useState({email: email , role: role, id: id})
  console.log(editDataUser)

  const [isOpenModal, openModal, closeModal] = useModal(false);

  const handleChangeDelete = (e) => {
    setDeleteDataUser({
     ... deleteDataUser, 
     [e.target.name]: e.target.value,
    })

  }

  const handleSubmitDelete = (e) => {
    e.preventDefault();
    editUser(editDataUser)
      .then((res) => {
        admiGetUsers(); 
        if (res.status === 201) {
          Swal.fire("Good job!", "You clicked the button!", "success");
        }
        console.log(res.status)
        closeModal
      })
      .catch((error) => {
        console.log(error);
        Swal.fire("Error!", "Tenemos un problema, intenta de nuevo", "error");
      });
  }

  
  return (
    <td>
      <img
        onClick={openModal}
        style={{ height: "20px", width: "20px" }}
        src={Delete}
        alt="delete"
      />
      <div className={`modal ${isOpenModal && "modal-open"}`}>
        <form className="formModal" onSubmit={handleSubmitDelete}>
          <button className="closeModal" onClick={closeModal} type="button">
            X
          </button>
          <h1>Eliminar Usuario </h1>
          {/* <label>Role</label>
          <input type="text"
            name="role"
            placeholder="Ingrese role"
            value={editDataUser.role}
            onChange={handleChangeEdit} />
          <label>Correo</label>
          <input type="text"
            name="email"
            placeholder="Ingrese e-mail"
            value={editDataUser.email}
            onChange={handleChangeEdit} />
          <label>Contraseña</label>
          <input type="text"
            name="password"
            placeholder="Ingrese Password"
            onChange={handleChangeEdit} />
          <button type="submit">Finalizar</button> */}

        </form>
      </div>
    </td>
  );
}

export { DeleteUser };
