import React from "react";
import { EditUsers } from "./editUsers";
import { CreateUsers } from "./createUser";

function UsersTable({ rows, admiGetUsers }) {
  return (
    <div>
      <table className="tableAdmin">
        <thead>
          <tr>
            <th> Email</th>
            <th> Role</th>
            <th> Opciones</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row, index) => (
            <tr key={index}>
              <td>{row.email}</td>
              <td>{row.role}</td>
              <EditUsers email={row.email} role={row.role} />
            </tr>
          ))}
        </tbody>
      </table>
      <CreateUsers admiGetUsers={admiGetUsers}/>
    </div>
  );
}

export default UsersTable;
