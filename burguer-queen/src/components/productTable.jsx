import React from "react";
import ModalProducts from "../Modals/modalProducts";
import { EditProducts } from "./editProducts";

function TableProducts({ rows }) {
  return (
    <div>
      <table className="tableAdmin">
        <thead>
          <tr>
            <th> name</th>
            <th> price</th>
            <th> imagen </th>
            <th> Tipo </th>
            <th> Opciones </th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row, index) => (
            <tr key={index}>
              <td>{row.name}</td>
              <td>{row.price}</td>
              <td>{row.image}</td>
              <td>{row.type}</td>
              <EditProducts />
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TableProducts;
