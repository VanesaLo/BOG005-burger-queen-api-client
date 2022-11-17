import React from "react";
import "../styles/login.css";
import image from "../images/Gourmet.jpg";
import { loginUsers } from "./utilis/peticiones";
import { useState } from "react";

 
function Login() {
  const handledSubmit = (e) => {
    e.preventDefault(); 
  }
   const [email, setPassword]= useState(" ");
   const [setEmail, Password]= useState(" "); 
 
  function handleChange(event) {
    console.log(event.target.value);
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
            <input className="emailUser" type="email" placeholder="Ingrese correo" onChange={handleChange}/>
          <label>Contraseña</label>
            <input className="passwordUser" type="password" placeholder="Ingrese contraseña" onChange={handleChange}/>
            <h6 className="password" >¿Olvidaste tu contraseña?</h6>
          <button className="nextButton" type="submit"> Siguiente</button>
        </form>
      </section>
    </div>
  );
}

export default Login;
