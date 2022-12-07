import React from "react";
import { Header } from "../components/Header/header";
import { Link } from "react-router-dom";
import "../styles/waiter.css";

function Waiter() {
  
function alertOnclick(){
  alert("Has dado click!")
}

  return (
    <>
      <Header>
        <nav className="navWaiter">
          <ul className="orderWaiter">
            <li>
              <Link to="/orders">Ordenes</Link>
            </li>
            <li>
              <Link to="/breackfast">Desayuno</Link>
            </li>
            <li>
              <Link to="/lunch">Almuerzo</Link>
            </li>
          </ul>
        </nav>
      </Header>
      <div className="containerWaiter">
        <section className="menuOption">Desayuno</section>
        <div className="formContainer">
          <section className="menu">
            <h3>Menú</h3>
            <div>
              <h6>hamburguesa</h6>
              <h6>huevos</h6>
            </div>
          </section>
          <section className="containerOrder">
            <h3>Pedido</h3>
            <label>Número Pedido</label>
            <input className="input" type="text" />
            <label>Cliente</label>
            <input className="input" type="text" />
            <h3>Items Seleccionados:</h3>
            <h5>hamburguesa</h5>
            <h5>huevos</h5>
            <h3>Total:</h3>
          </section>
          <button className="btnOrder" onClick={alertOnclick} >Nueva Orden</button>
          <button className="btnSend" onClick={alertOnclick} >Enviar</button>
        </div>
      </div>
    </>
  );
}

export default Waiter;
