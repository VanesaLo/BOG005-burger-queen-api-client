import React from "react";
import { EditProducts } from "../Products/editProducts";

function TableProducts({ rows }) {
  return (
    <div>
      <table className="tableAdmin">
        <thead>
          <tr>
            <th> Name</th>
            <th> Price</th>
            <th> Imagen </th>
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
