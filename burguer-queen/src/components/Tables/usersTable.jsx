import React from "react";
import { EditUsers } from "../Users/editUsers";
import { CreateUsers } from "../Users/createUser";

function UsersTable({ rows, admiGetUsers }) {
  return (
    <div>
      <table className="tableAdmin">
        <thead>
          <tr>
            <th> Num</th>
            <th> Email</th>
            <th> Role</th>
            <th> Opciones</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row, index) => (
            <tr key={index}>
              <td>{row.id}</td>
              <td>{row.email}</td>
              <td>{row.role}</td>
              <EditUsers email={row.email} role={row.role} id={row.id} />
            </tr>
          ))}
        </tbody>
      </table>
      <CreateUsers admiGetUsers={admiGetUsers} />
    </div>
  );
}

export default UsersTable;
