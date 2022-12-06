import React from "react";
import { useNavigate, Link } from "react-router-dom";
import "../styles/admin.css";
import image from "../images/Gourmet.jpg";
import imageIcon from "../images/cerrar-sesion.png";


function Waiter() {

    const navigate = useNavigate();

    const buttonOut = (e) => {
        e.preventDefault();
        navigate("/");
    };


    return (
        <section className="containerAdmin">
            <header id="containerHeader">
                <img className="logoImageAdmin" src={image} alt="foto del logo" />
                <h1 className="titleAdmin"> Gourmet Queen </h1>
                <img id="logoutIcon" onClick={buttonOut} src={imageIcon} alt="logout" />
            </header>
            <nav className="navAdmin">
                <ul className="orderAdmin">
                    <li>
                        <Link to="/products">Desayuno</Link>
                    </li>
                    <li>
                        <Link to="/almuerzo">Almuerzo</Link>
                    </li>
                </ul>
            </nav>

        </section>
    );
}

export default Waiter;