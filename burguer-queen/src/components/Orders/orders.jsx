import React from "react";
import addIcon from "../../images/add.png";
import cancelIcon from "../../images/cancel.png";

function Orders() {
  return (
    <div className="containerOrders">
      <form className="orderForm">
        <h2 className="titleOrders">Pedido</h2>
        <div className="orderDetails">
          <label className="InputOrders">Número de la orden</label>
          <input type="text" name="numOrder" />
          <label className="InputOrders">Nombre del cliente</label>
          <input type="text" name="nameClientOrder" />
        </div>
        <section className="tableHeaderSection">
          <table className="tableOrder">
            <thead>
              <tr>
                <th>Nombre</th>
                <th>Cantidad</th>
                <th>Precio</th>
              </tr>
            </thead>
            <tbody className="tableBodySection">
              <tr>
                <td>Huevos rancheros</td>
                <td>4</td>
                <td>15</td>
              </tr>
            </tbody>
          </table>
          <section className="tableOrderTotal">Total: $15</section>
        </section>
        <button type="submit" className="btnSubmitOrder">
          <img
            src={addIcon}
            alt="add"
            style={{ height: "20px", width: "20px" }}
          />
        </button>
        <button className="BtnCancelOrder">
          <img
            src={cancelIcon}
            alt="cancel"
            style={{ height: "20px", width: "20px" }}
          />
        </button>
      </form>
    </div>
  );
}

export { Orders };
