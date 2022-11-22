import React from "react";
import "../styles/login.css";
import image from "../images/Gourmet.jpg";
import { loginUsers } from "../utils/petitions";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const handledSubmit = (e) => {
    e.preventDefault();
    console.log(email, password);

    loginUsers(email, password)
      .then((response) => {
        console.log(response);

        if (response.data.user.role === "admin") {
          navigate("/admin");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

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
          <h6 className="password">¿Olvidaste tu contraseña?</h6>
          <button className="nextButton" type="submit">
            Siguiente
          </button>
        </form>
      </section>
    </div>
  );
}

export default Login;
