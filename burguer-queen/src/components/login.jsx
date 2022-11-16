import React from "react";
import "../styles/login.css";
import image from "../images/Gourmet.jpg";
import arrow from '../images/angle-left.png';

function Login() {
  return (
    <div className="container">
      <section>
        <img className="logoImage" src={image} alt="foto del logo" />
      </section>

      <section className="containerForm">
      <h2 className="TitleForm"> Iniciar Sesión</h2>
        <form className="formLogin">
         <label>Correo</label>
            <input className="emailUser" type="email" placeholder="Ingrese correo" />
          <label>Contraseña</label>
            <input className="passwordUser" type="password" placeholder="Ingrese contraseña" />
            <h6 className="password" >¿Olvidaste tu contraseña?</h6>
          <button className="nextButton"> Siguiente</button>
        </form>
      </section>
    </div>
  );
}

export default Login;
