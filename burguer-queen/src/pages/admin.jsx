import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import "../styles/admin.css";
import { getUsers } from "../utils/petitions";
import UsersTable from "../components/usersTable";
import image from "../images/Gourmet.jpg";
import imageIcon from "../images/cerrar-sesion.png";

function Admin() {


  const [users, setUsers] = useState([]);

  const admiGetUsers = () => {
    getUsers()
      .then((res) => {
        console.log(res.data);
        setUsers(res.data);
      })
      .catch((eer) => console.log("caducó token"));
  };

  useEffect(() => {
    admiGetUsers();
  }, []);

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
      <UsersTable rows={users} admiGetUsers={admiGetUsers} />

    </section>
  );
}

export default Admin;
