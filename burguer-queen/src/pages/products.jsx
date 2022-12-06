import React, { useState, useEffect } from "react";
// import { HeaderAdmin } from "../components/headerAdmin";
import TableProducts from "../components/productTable";
import { getProducts } from "../utils/petitions";
import "../styles/admin.css";
import { CreateProduct } from "../components/createProduct";

function Products() {
  const [products, setProducts] = useState([]);

  const admiGetProduct = () => {
    getProducts()
      .then((res) => {
        console.log(res.data);
        setProducts(res.data);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    admiGetProduct();
  }, []);
  return (
    <section className="containerAdmin">
      {/* <HeaderAdmin></HeaderAdmin> */}
      <TableProducts rows={products}></TableProducts>
      <CreateProduct />
    </section>
  );
}

export { Products };
