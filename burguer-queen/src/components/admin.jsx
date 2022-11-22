import React from "react";
import "../styles/admin.css";
import image from "../images/Gourmet.jpg";
import imageIcon from "../images/cerrar-sesion.png";


function Admin() {
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
              <a href="">Cerrar Sesion</a>
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
