import React, { useState } from "react";
import editar from "../../images/edit.png";
import Delete from "../../images/delete.png";
import { editUser, deleteUser } from "../../utils/petitions";
import Swal from "sweetalert2";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";

function EditUsers({ email, role, id, admiGetUsers }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [deleteDataUser, setDeleteDataUser] = useState(false);
  const [editDataUser, setEditDataUser] = useState({
    email: email,
    role: role,
    id: id,
  });

  // const [isOpenModal, openModal, closeModal] = useModal(false);

  const handleChangeEdit = (e) => {
    setEditDataUser({
      ...editDataUser,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmitEdit = (e) => {
    e.preventDefault();
    editUser()
      .then((res) => {
        localStorage.setItem("userUpdate", JSON.stringify(res.data));
        admiGetUsers;
        if (res.status === 200) {
          Swal.fire("Good job!", "You clicked the button!", "success");
        }
        console.log(res.status);
        handleClose;
      })
      .catch((error) => {
        console.log(error);
        Swal.fire("Error!", "Tenemos un problema, intenta de nuevo", "error");
      });
  };

  const handleSubmitDeleteUser = () => {
    deleteUser(id);
    Swal.fire({
      title: "¿Estás seguro?",
      text: "¡No podrás deshacer esta acción!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "¡Sí, elimínalo!",
      cancelButtonText: "Cancelar",
    })
      .then((res) => {
        if (res.isConfirmed) {
          swalWithBootstrapButtons.fire(
            "Deleted!",
            "Your file has been deleted.",
            "success"
          );

          setDeleteDataUser(!deleteDataUser);
        } else if (result.dismiss === Swal.DismissReason.cancel) {
          swalWithBootstrapButtons.fire(
            "Cancelled",
            "Your imaginary file is safe :)",
            "error"
          );
        }
      })
      .catch((error) => {
        error;
      });
  };

  return (
    <td>
      <img
        onClick={handleShow}
        style={{ height: "20px", width: "20px" }}
        src={editar}
        alt="editar"
      />
      <img
        onClick={handleSubmitDeleteUser}
        style={{ height: "20px", width: "20px" }}
        src={Delete}
        alt="delete"
      />
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Editar usuario</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-2" controlId="exampleForm.ControlInput1">
              <Form.Label>Role</Form.Label>
              <Form.Control
                type="text"
                placeholder=""
                name="role"
                value={editDataUser.role}
                onChange={handleChangeEdit}
                required
              />
              <Form.Label> Correo</Form.Label>
              <Form.Control
                type="text"
                placeholder=""
                name="email"
                value={editDataUser.email}
                onChange={handleChangeEdit}
                required
              />
            </Form.Group>
            <Form.Group className="mb-2" controlId="exampleForm.ControlInput3">
              <Form.Label>Password</Form.Label>
              <Form.Control type="text" name="password" required />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleSubmitEdit}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
      {/* <div className={`modal ${isOpenModal && "modal-open"}`}>
        <form className="formModal" onSubmit={handleSubmitEdit}>
          <button className="closeModal" onClick={closeModal} type="button">
            X
          </button>
          <h1>Editar Usuarios</h1>
          <label>Role</label>
          <input
            type="text"
            name="role"
            placeholder="Ingrese role"
            value={editDataUser.role}
            onChange={handleChangeEdit}
            required
          />
          <label>Correo</label>
          <input
            type="text"
            name="email"
            placeholder="Ingrese e-mail"
            value={editDataUser.email}
            onChange={handleChangeEdit}
            required
          />
          <label>Contraseña</label>
          <input
            type="text"
            name="password"
            placeholder="Ingrese Password"
            onChange={handleChangeEdit}
          />
          <button type="submit">Finalizar</button>
        </form>
      </div> */}
    </td>
  );
}

export { EditUsers };
