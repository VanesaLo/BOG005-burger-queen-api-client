import React from "react";
import "../styles/admin.css";
import image from "../images/Gourmet.jpg";
import imageIcon from "../images/cerrar-sesion.png";
import { useNavigate } from "react-router-dom";
import { getUser} from "../utils/petitions";

function Admin() {
  const navigate = useNavigate();

  const buttonOut = (e) => {
    e.preventDefault();
    navigate("/");
  };

  const token = JSON.parse( localStorage.getItem('token'));
        console.log(token);

  getUser (token)
    .then((res) => {
      console.log(res.data)
    })
    .catch(eer=>console.log('caducó token'))
  

  return (
    <section id="containerAdmin">
      <header id="containerHeader">
        <img className="logoImageAdmin" src={image} alt="foto del logo" />
        <h1 className="titleAdmin">Gourmet Queen</h1>
        <nav className="navAdmin">
          <ul className="orderAdmin">
            <li>
              <a href="">Productos</a>
            </li>
            <li>
              <a href="">Usuarios </a>
            </li>
            <li>
              <img id='logoutIcon' onClick={buttonOut} src={imageIcon} alt='logout'/>
            </li>
          </ul>
        </nav>
      </header>

      <table className="tableAdmin">
        <thead>
          <tr>
            <th> Nombre </th>
            <th> Cargo </th>
            <th> Status </th>
          </tr>
          <tr>
            <td> Andres </td>
            <td> Mesero </td>
            <td> Activo </td>
          </tr>
        </thead>
      </table>
    </section>
  );
}

export default Admin;
