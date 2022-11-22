import React from "react";
import "../styles/login.css";
import image from "../images/Gourmet.jpg";
import { loginUsers } from "../utils/petitions";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  
   const onClickpassword = () => {
    alert("Por favor, contactate con el administrador");
    return
  };

  const handledSubmit = (e) => {
    e.preventDefault();
    console.log(email, password);

    loginUsers(email, password)
      .then((response) => {
       const errorMessage = document.getElementById('errorMessage')
        errorMessage.innerHTML = ''

        if (response.data.user.role === 'admin') {
            navigationPag('/admin');
        }
    })
    .catch((error) => {
        console.log(error)
        if (error.response.data === 'Incorrect password') {
            errorMessage.innerHTML = 'Contraseña incorrecta'
        }
        else {
            errorMessage.innerHTML = 'Usuario no encontrado'
        }
    })
  };
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


  return (
    <div className="container">
      <section>
        <img className="logoImage" src={image} alt="foto del logo" />
      </section>

      <section className="containerForm">
        <h2 className="TitleForm"> Iniciar Sesión</h2>
        <form className="formLogin" onSubmit={handledSubmit}>
          <label>Correo</label>
          <input
            className="emailUser"
            required
            value={email}
            type="email"
            placeholder="Ingrese correo"
            onChange={(e) => setEmail(e.target.value)}
          />
          <label>Contraseña</label>
          <input
            className="passwordUser"
            required
            value={password}
            type="password"
            placeholder="Ingrese contraseña"
            onChange={handleChangePass}
          />
          <button className="password" onClick={onClickpassword}>¿Olvidaste tu contraseña?</button>
          <p id= 'errorMessage'></p>
          <button
          <button className="nextButton" type="submit">
            Siguiente
          </button>
        </form>
      </section>
    </div>
  );
}

export {Login};
