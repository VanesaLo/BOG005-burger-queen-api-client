import React from "react";


function TableProducts({ rows }) {
  return (
    <div>
      <table className="tableProduct">
        <thead>
          <tr>
            <th> name</th>
            <th> price</th>
            <th> imagen </th>
            <th> Tipo </th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row, index) => (
            <tr key={index}>
              <td>{row.name}</td>
              <td>{row.price}</td>
              <td>{row.image}</td>
              <td>{row.type}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TableProducts;
