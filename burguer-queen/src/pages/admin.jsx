import React, { useState, useEffect } from "react";
import "../styles/admin.css";
import { getUsers } from "../utils/petitions";
import UsersTable from "../components/usersTable";
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

      <UsersTable rows={users} admiGetUsers={admiGetUsers}></UsersTable>

    </section>
  );
}

export default Admin;
