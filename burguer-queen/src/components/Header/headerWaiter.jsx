import React from "react";
import { Header } from "./header";
import { Link } from "react-router-dom";

function HeaderWaiter() {
  return (
    <>
      <Header>
      <nav className="navWaiter">
          <ul className="orderWaiter">
            <li>
              <Link to="/waiter">Ordenes</Link>
            </li>
            <li>
              <Link to="/breackfast">Desayuno</Link>
            </li>
            <li>
              <Link to="/lunch">Almuerzo</Link>
            </li>
          </ul>
        </nav>
      </Header>
    </>
  );
}

export { HeaderWaiter };
