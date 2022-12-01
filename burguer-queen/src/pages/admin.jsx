import React, { useState, useEffect } from "react";
import "../styles/admin.css";
import { getUser } from "../utils/petitions";
import AdminTable from "../components/usersTable";
import { CreateUser } from "../components/createUser";
import { HeaderAdmin } from "../components/headerAdmin";

function Admin() {
  const token = JSON.parse(localStorage.getItem("token"));

  const [users, setUsers] = useState([]);

  const admiGetUsers = () => {
    getUser(token)
      .then((res) => {
        console.log(res.data);
        setUsers(res.data);
      })
      .catch((eer) => console.log("caducó token"));
  };

  useEffect(() => {
    admiGetUsers();
  }, []);

  return (
    <section className="containerAdmin">
      <HeaderAdmin />

      <AdminTable rows={users}></AdminTable>

      <CreateUser />
    </section>
  );
}

export default Admin;
