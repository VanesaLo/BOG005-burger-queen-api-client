import React from "react";
import image from "../../images/Gourmet.jpg";
import imageIcon from "../../images/cerrar-sesion.png";
import { useNavigate } from "react-router-dom";

function Header({children}) {
  const navigate = useNavigate();

  const buttonOut = (e) => {
    e.preventDefault();
    navigate("/");
  };

  return (
    <header id="containerHeader">
      <img className="logoImageAdmin" src={image} alt="foto del logo" />
      <h1 className="titleAdmin"> Gourmet Queen </h1>
      {children}
      <img id="logoutIcon" onClick={buttonOut} src={imageIcon} alt="logout" />
    </header>
  );
}

export { Header };
