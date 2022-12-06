// import React, { useState } from "react";
// import "./modal.css";
// import { editUser } from "../utils/petitions";


// const ModalEditUsers = ({ isOpen, closeModal, children, title, email, role }) => {

//   console.log('email in ModalEdit', email);

//   const [editEmail, setEditEmail] = useState(email);
//   const [editRole, setEditRole] = useState(role);


//   function handleChangeEdit(e) {

//   }

//   function handleSubmitEdit(e) {
//     e.preventDefault();
//     editUser(props.editUsern)
//       .then((res) => {
//         console.log

//       })
//       .catch((error) => console.log(error));

//     closeModal();
//   }


//   return (
//     <div className={`modal ${isOpen && "modal-open"}`}>
//       <form className="formModal" onSubmit={handleSubmitEdit}>
//         <button className="closeModal" onClick={closeModal} type="button">
//           X
//         </button>
//         <h1>{title}</h1>
//         <label>Role</label>
//         <input type="text"
//           name="role"
//           placeholder="Ingrese role"
//           value={editRole}
//           onChange={handleChangeEdit} />
//         <label>Correo</label>
//         <input type="text"
//           name="email"
//           placeholder="Ingrese e-mail"
//           value={editEmail}
//           onChange={handleChangeEdit} />
//         <label>Contraseña</label>
//         <input type="text"
//           name="password"
//           placeholder="Ingrese Password"
//           onChange={handleChangeEdit} />
//         <button type="submit">Finalizar</button>
//         {children}
//       </form>
//     </div>
//   );
// };

// export default ModalEditUsers;
