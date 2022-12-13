import React from "react";
import "../styles/waiter.css";
import { HeaderWaiter } from "../components/Header/headerWaiter";

function Waiter() {
  
function alertOnclick(){
  alert("Has dado click!")
}

  return (
    <>
      <HeaderWaiter/>
      <div className="containerWaiter">
        <section className="menuOption">Desayuno</section>
        <div className="formContainer">
          <section className="menu">
            <h3>Menú</h3>
            <div>
              <h6>Hamburguesa</h6>
              <h6>Huevos</h6>
            </div>
          </section>
          <section className="containerOrder">
            <h3>Pedido</h3>
            <label>Número Pedido</label>
            <input className="input" type="text" />
            <label>Cliente</label>
            <input className="input" type="text" />
            <h3>Items Seleccionados:</h3>
            <h5>Hamburguesa</h5>
            <h5>Huevos</h5>
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
