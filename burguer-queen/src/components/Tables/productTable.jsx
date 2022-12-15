import React from "react";
import { CreateProduct } from "../Products/createProduct";
import { EditProducts } from "../Products/editProducts";

function TableProducts({ rows, admiGetProduct }) {
  return (
    <div>
      <table className="tableAdmin">
        <thead>
          <tr>
            <th> Name</th>
            <th> Price</th>
            <th> Tipo </th>
            {/* <th> Image </th> */}
            <th> Opciones </th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row, index) => (
            <tr key={index}>
              <td>{row.id}</td>
              <td>{row.name}</td>
              <td>{row.price}</td>
              <td>{row.type}</td>
              {/* <td>{row.image}</td> */}
              <EditProducts
                name={row.name}
                price={row.price}
                type={row.type}
                id={row.id}
                // image={row.image}
              />
            </tr>
          ))}
        </tbody>
      </table>
      <CreateProduct admiGetProduct={admiGetProduct} />
    </div>
  );
}

export default TableProducts;
