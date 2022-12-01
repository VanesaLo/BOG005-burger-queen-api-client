import React, { useState, useEffect } from "react";
import "../styles/admin.css";
import image from "../images/Gourmet.jpg";
import imageIcon from "../images/cerrar-sesion.png";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { getUser, getProducts } from "../utils/petitions";
import AdminTable from "../components/usersTable";
import { CreateUser } from "../components/createUser";
import TableProducts from "../components/productTable";

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

  const [products, setProducts] = useState([]);

  const admiGetProduct = () => {
    getProducts(token)
      .then((res) => {
        console.log(res.data);
        setProducts(res.data);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    admiGetProduct();
  }, []);


  return (
  <section id="containerAdmin">
      <header id="containerHeader">
        <img className="logoImageAdmin" src={image} alt="foto del logo" />
        <h1 className="titleAdmin"> Gourmet Queen </h1>
        <nav className="navAdmin">
          <ul className="orderAdmin">
            <li>
              <Link to="products">Productos</Link>
            </li>
            <li>
              <Link to="users">Usuarios</Link>
            </li>
        </ul>
      </nav>
      <img id="logoutIcon" onClick={buttonOut} src={imageIcon} alt="logout" />
    </header>
    <AdminTable rows={users}></AdminTable>
    
    <TableProducts rows={products}></TableProducts>
  
    <CreateUser></CreateUser>
    </section>
  );
}

export default Admin;
