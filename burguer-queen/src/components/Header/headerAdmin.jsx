import React from "react";
import { Header } from "./header";
import { Link } from "react-router-dom";

function HeaderAdmin() {
  return (
    <>
      <Header>
        <nav className="navAdmin">
          <ul className="orderAdmin">
            <li>
              <Link to="/products">Productos</Link>
            </li>
            <li>
              <Link to="/admin">Usuarios</Link>
            </li>
          </ul>
        </nav>
      </Header>
    </>
  );
}

export { HeaderAdmin };
