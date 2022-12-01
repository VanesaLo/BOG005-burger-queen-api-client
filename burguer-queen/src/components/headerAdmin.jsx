import React from "react";
import image from "../images/Gourmet.jpg";
import imageIcon from "../images/cerrar-sesion.png";
import {Link, useNavigate} from "react-router-dom";

function HeaderAdmin(){

    const navigate = useNavigate();

    const buttonOut = (e) => {
        e.preventDefault();
        navigate("/");
      };

    return (
        <header id="containerHeader">
        <img className="logoImageAdmin" src={image} alt="foto del logo" />
        <h1 className="titleAdmin"> Gourmet Queen </h1>
        <nav className="navAdmin">
          <ul className="orderAdmin">
            <li>
              <Link to="/products">Productos</Link>
            </li>
            <li>
              <Link to="/admin">Usuarios</Link>
            </li>
        </ul>
      </nav>
      <img id="logoutIcon" onClick={buttonOut} src={imageIcon} alt="logout" />
    </header>
    )
}

export {HeaderAdmin};