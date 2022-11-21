import React from "react";
import "../styles/login.css";
import image from "../images/Gourmet.jpg";
import { loginUsers } from "../petitions/petitionss.js";
import { useState } from "react";
import { useNavigate } from "react-router-dom";


function Login() {

  const navigationPag = useNavigate(); 

  const onClickpassword = () => {
    alert("Por favor, contactate con el administrador");
    return onClickpassword; 
  };

  const [email, setEmail] = useState(" ");
  const [password, setPassword] = useState("");

  function handleChangeEmail(event) {
    setEmail(event.target.value);
    // console.log((event.target.value))
  }
  function handleChangePassword(event) {
    setPassword(event.target.value);
    // console.log((event.target.value))
  }

  const handledSubmit = (e) => {
    e.preventDefault();

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
  }

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
            type="email"
            value={email}
            placeholder="Ingrese correo"
            onChange={handleChangeEmail} />

          <label>Contraseña</label>
          <input className="passwordUser" 
          type="password" 
          value={password} 
          placeholder="Ingrese contraseña" 
          onChange={handleChangePassword} />
          <button className="password" onClick={onClickpassword}>¿Olvidaste tu contraseña?</button>
          <p id= 'errorMessage'></p>
          <button
            className="nextButton"
            type="submit"> Siguiente</button>
        </form>
      </section>
    </div>
  );
}

export {Login};
