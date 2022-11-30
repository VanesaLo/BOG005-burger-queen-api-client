import React from "react";
import { EditUsers } from "./editUsers";

function AdminTable({ rows }) {
  return (
    <div>
      <table className="tableAdmin">
        <thead>
          <tr>
            <th> email</th>
            <th> role</th>
            <th> opciones</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row, index) => (
            <tr key={index}>
              <td>{row.email}</td>
              <td>{row.role}</td>
              <EditUsers></EditUsers> 
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default AdminTable;
