import { createUser } from "../../utils/petitions";
import Swal from "sweetalert2";
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

function CreateUsers({ admiGetUsers }) {

 const [show, setShow] = useState(false);

 const handleClose = () => setShow(false);
 const handleShow = () => setShow(true);
 const [newUser, setNewUser] = useState([
   { email: "",  role: "", password: ""},
 ]);

  function handleChange(e) {
    setNewUser({
      ...newUser,
      [e.target.name]: e.target.value,
   });
 }

 function handleSubmit(e) {
   e.preventDefault();
   createUser(newUser)
     .then((res) => {
       admiGetUsers();
       if (res.status === 201) {
         Swal.fire("Good job!", "You clicked the button!", "success");
       }
  
     })
     .catch((error) => {
       console.log(error);
       Swal.fire("Error!", "Tenemos un problema, intenta de nuevo", "error");
     });
 }



 return (
   <>
        <h3 className="titleCreateUser">¿Nuevo Usuario?</h3>
        <Button className="btnCreateUser" onClick={handleShow}> Crear usuario</Button>
     

     <Modal show={show} onHide={handleClose}>
       <Modal.Header closeButton>
         <Modal.Title>Crear Usuario</Modal.Title>
       </Modal.Header>
       <Modal.Body>
         <Form>
           <Form.Group className="mb-2" controlId="exampleForm.ControlInput1">
             <Form.Label>Rol</Form.Label>
             <Form.Control
               type="text"
               placeholder="Ingresa Rol"
               name= "role"
               value={newUser.role}
               onChange={handleChange}
              
             />
           </Form.Group>
           <Form.Group
             className="mb-2"
             controlId="exampleForm.ControlInput2"
           >
             <Form.Label>Correo</Form.Label>
             <Form.Control
               type="email"
               placeholder="name@example.com"
               name= "email"
               value={newUser.email}
               onChange={handleChange}
             />
           </Form.Group>
           <Form.Group
             className="mb-2"
             controlId="exampleForm.ControlInput3"
           >
             <Form.Label>Contraseña</Form.Label>
             <Form.Control
               type="password"
               name="password"
               onChange={handleChange}
             
             />
           </Form.Group>
         </Form>
       </Modal.Body>
       <Modal.Footer>
         <Button variant="primary" onClick={handleSubmit}>
           Save Changes
         </Button>
       </Modal.Footer>
     </Modal>
   </>

 );
}

export { CreateUsers };