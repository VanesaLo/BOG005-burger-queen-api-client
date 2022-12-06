import React, { useState } from "react";
import "./modal.css";
import { createUser } from "../utils/petitions";
import Swal from 'sweetalert2'


const ModalCreateUsers = ({ isOpen, closeModal, children, title, admiGetUsers }) => {

  const [newUser, setNewUser] = useState([{ email: "", password: "", role: "" }]);

  function handleChange(e) {
    setNewUser({
      ...newUser,
      [e.target.name]: e.target.value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    createUser(newUser)
      .then((res) => {
        admiGetUsers();
        if (res.status === 201) {
          Swal.fire(
            'Good job!',
            'You clicked the button!',
            'success'
          )
        }
      })
      .catch((error) => { console.log(error)
        Swal.fire(
          'Error!',
          'Tenemos un problema, intenta de nuevo',
          'error'
        ), 
        
    closeModal();
        })
  }

  return (
    <div className={`modal ${isOpen && "modal-open"}`}>
      <form className="formModal" onSubmit={handleSubmit}>
        <button className="closeModal" onClick={closeModal} type="button">
          X
        </button>
        <h1>{title}</h1>
        <label>Role</label>
        <input type="text" name="role" placeholder="" onChange={handleChange} />
        <label>Correo</label>
        <input type="email" name="email" placeholder="" onChange={handleChange} />
        <label>Contraseña</label>
        <input type="password" name="password" placeholder="" onChange={handleChange} />
        <button type="submit">Finalizar</button>
        {children}
      </form>
    </div>
  );
};

export default ModalCreateUsers;
