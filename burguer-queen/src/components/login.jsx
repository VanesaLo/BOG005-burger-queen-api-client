import React from "react";
import "../styles/login.css";
import image from "../images/Gourmet.jpg";
import { loginUsers } from "../utils/petitions";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const onClickForget = (e) => {
    e.preventDefault();
    alert("Por favor, contactate con el administrador");
    return;
  };

  const handledSubmit = (e) => {
    e.preventDefault();
    console.log(email, password);

    loginUsers(email, password)
      .then((response) => {
        const errorMessage = document.getElementById("errorMessage");
        errorMessage.innerHTML = "";

        localStorage.setItem(
          "token",
          JSON.stringify(response.data.accessToken)
        );

        if (response.data.user.role === "admin") {
          navigate("/admin");
        }
      })
      .catch((error) => {
        console.log(error);
        if (error.response.data === "Incorrect password") {
          errorMessage.innerHTML = "Contraseña incorrecta";
        } else if (error.response.data === "Password is too short") {
          errorMessage.innerHTML = "La contraseña es muy corta";
        } else error.response.data === "Cannot find user";
        errorMessage.innerHTML = "Usuario no encontrado";
      });
  };
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="container">
      <section>
        <img className="logoImage" src={image} alt="foto del logo" />
      </section>

      <section className="containerForm">
        <form className="formLogin" onSubmit={handledSubmit}>
          <h2 className="TitleForm"> Iniciar Sesión</h2>
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
            onChange={(e) => setPassword(e.target.value)}
          />
          <a className="forgetPassword" onClick={onClickForget}>
            ¿Olvidaste tu contraseña?
          </a>
          <p id="errorMessage"></p>
          <button className="nextButton" type="submit">
            Siguiente
          </button>
        </form>
      </section>
    </div>
  );
}

export default Login;
