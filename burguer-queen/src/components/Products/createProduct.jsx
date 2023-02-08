import React, { useState } from "react";
import "../../Modals/modal.css";
import { createProducts } from "../../utils/petitions";
import Swal from "sweetalert2";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';


function CreateProduct({admiGetProduct}) {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [newProduct, setNewProduct] = useState([
    { name: "", price: "", type: "" },
  ]);

  function handleChange(e) {
    setNewProduct({
      ...newProduct,
      [e.target.name]: e.target.value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    createProducts(newProduct)
      .then((res) => {
        admiGetProduct();
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
         <h3 className="titleCreateUser">¿Nuevo Producto?</h3>
        <Button className="btnCreateUser" onClick={handleShow}> Crear producto</Button>
   
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Crear Producto</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group className="mb-2" controlId="exampleForm.ControlInput1">
                <Form.Label>Nombre</Form.Label>
                <Form.Control
                  type="text"
                  placeholder=""
                  name="name"
                  value={newProduct.name}
                  onChange={handleChange}
          
                />
                <Form.Label> Precio</Form.Label>
                <Form.Control
                  type="text"
                  placeholder=""
                  name="price"
                  value={newProduct.price}
                  onChange={handleChange}
                />
              </Form.Group>
              <Form.Group
                className="mb-2"
                controlId="exampleForm.ControlInput2"
              >
                <Form.Label>Imagen</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Ingrese la imagen del producto"
                  onChange={handleChange}
                />
              </Form.Group>
              <Form.Group
                className="mb-2"
                controlId="exampleForm.ControlInput3"
              >
                <Form.Label>Tipo</Form.Label>
                <Form.Control
                  type="text"
                  name="type"
                  value={newProduct.type}
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

export { CreateProduct };
