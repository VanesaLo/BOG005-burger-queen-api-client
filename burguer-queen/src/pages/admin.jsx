import React, { useState, useEffect } from "react";
import "../styles/admin.css";
import image from "../images/Gourmet.jpg";
import imageIcon from "../images/cerrar-sesion.png";
import { useNavigate } from "react-router-dom";
import { getUser } from "../utils/petitions";
import AdminTable from "../components/adminTable";


function Admin() {
  const navigate = useNavigate();
  const token = JSON.parse(localStorage.getItem("token"));

  const [users, setUsers] = useState([]);

  const buttonOut = (e) => {
    e.preventDefault();
    navigate("/");
  };

  const admiGetUsers = () => {
    getUser(token)
      .then((res) => {
        console.log(res.data);
        setUsers(res.data);
      })
      .catch((eer) => console.log("caducó token"));
  };

  useEffect(() => {
    admiGetUsers();
  }, []);

  return (
    <section id="containerAdmin">
      <header id="containerHeader">
        <img className="logoImageAdmin" src={image} alt="foto del logo" />
        <h1 className="titleAdmin"> Gourmet Queen </h1>
        <nav className="navAdmin">
          <ul className="orderAdmin">
            <li>
              <a href="">Productos</a>
            </li>
            <li>
              <a href="">Usuarios </a>
            </li>
            <li>
              <img
                id="logoutIcon"
                onClick={buttonOut}
                src={imageIcon}
                alt="logout"
              />
            </li>
          </ul>
        </nav>
      </header>

      <AdminTable rows={users}></AdminTable>
    </section>
  );
}

export default Admin;
