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
      <h2 className="TitleForm"> Iniciar Sesión</h2>
        <form className="formLogin">
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
