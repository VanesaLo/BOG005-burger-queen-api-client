import React from "react";
import "../styles/login.css";
import image from "../images/Gourmet.jpg";
import { loginUsers } from "../utils/petitions";
import { useState } from "react";

function Login() {
  const handledSubmit = (e) => {
    e.preventDefault();
    console.log(email, password);
  };
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // function handleChangeEmail(event) {
  //   setEmail(event.target.value);
  // }
  // // console.log(email);

  function handleChangePass(event) {
    setPassword(event.target.value);
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
            value={email}
            type="email"
            placeholder="Ingrese correo"
            onChange={(e)=>setEmail(e.target.value)}
          />
          <label>Contraseña</label>
          <input
            className="passwordUser"
            value={password}
            type="password"
            placeholder="Ingrese contraseña"
            onChange={handleChangePass}
          />
          <h6 className="password">¿Olvidaste tu contraseña?</h6>
          <button className="nextButton" type="submit">
            {" "}
            Siguiente
          </button>
        </form>
      </section>
    </div>
  );
}

export default Login;
