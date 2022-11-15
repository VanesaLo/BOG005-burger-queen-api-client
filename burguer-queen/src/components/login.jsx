import React from "react";
import "../styles/login.css";
import image from "../images/Gourmet.jpg";

function Login() {
  return (
    <div className="container">
      <section>
        <img className="logoImage" src={image} alt="foto del logo" />
      </section>

      <section className="containerForm">
        <form classId="formLogin">
          <h2> Iniciar Sesión</h2>
          <label>
            Ingrese Email
            <input className="emailUser" type="email" placeholder="" />
          </label>
          <label>
            Ingrese Contraseña
            <input className="passwordUser" type="password" placeholder="" />
          </label>
          <button className="nextButton"> Siguiente </button>
        </form>
      </section>
    </div>
  );
}

export default Login;
