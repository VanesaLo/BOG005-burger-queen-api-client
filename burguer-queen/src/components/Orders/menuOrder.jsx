import React, { useState } from "react";

function Menu({ admiGetProducts }) {
  const [showProducts, setShowProducts] = useState(admiGetProducts);

  const filterMenu = (filter) => {
    const listFilter = admiGetProducts.filter(
      (product) => product.type == filter
    );
    setShowProducts(listFilter);
    return listFilter;
  };

  return (
    <>
      <section className="btnSectionFilter">
        <button className="btnBreakfast" onClick={() => filterMenu("Desayuno")}>
          Desayuno
        </button>
        <button className="btnLunch" onClick={() => filterMenu("Almuerzo")}>
          Almuerzo
        </button>
      </section>

      <section className="menu">
        {showProducts.map((product) => (
          <article key={product.id}>
            <p>
              {product.name} <span>${product.price}</span>
            </p>
          </article>
        ))}
      </section>
    </>
  );
}

export { Menu };
