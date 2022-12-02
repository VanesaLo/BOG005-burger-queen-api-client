import React, { useState, useEffect } from "react";
import "../styles/admin.css";
import { getUsers } from "../utils/petitions";
import AdminTable from "../components/usersTable";
import { CreateUsers } from "../components/createUser";
import { HeaderAdmin } from "../components/headerAdmin";

function Admin() {


  const [users, setUsers] = useState([]);

  const admiGetUsers = () => {
    getUsers()
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

      <CreateUsers />
    </section>
  );
}

export default Admin;
