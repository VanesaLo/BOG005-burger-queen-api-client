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
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Nombre</Form.Label>
                <Form.Control
                  type="text"
                  placeholder=""
                  onChange={handleChange}
                  autoFocus
                />
                <Form.Label> Precio</Form.Label>
                <Form.Control
                  type="text"
                  placeholder=""
                  onChange={handleChange}
                  autoFocus
                />
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput2"
              >
                <Form.Label>Imagen</Form.Label>
                <Form.Control
                  type="email"
                  placeholder=""
                  onChange={handleChange}
                  autoFocus
                />
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput3"
              >
                <Form.Label>Tipo</Form.Label>
                <Form.Control
                  type="text"
                  onChange={handleChange}
                  autoFocus
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
    // <div className="containerCreateProduct">
    //   <h3 className="titleCreateUser">¿Nuevo Producto?</h3>
    //   <button className="btnCreateUser" onClick={openModal}>
    //     Crear producto
    //   </button>
    //   <div className={`modal ${isOpenModal && "modal-open"}`}>
    //     <form className="formModal" onSubmit={handleSubmit}>
    //       <button className="closeModal" onClick={closeModal}>
    //         X
    //       </button>
    //       <h1>Crear Producto</h1>
    //       <label>Nombre</label>
    //       <input placeholder="" name="name" onChange={handleChange} />
    //       <label>Precio</label>
    //       <input placeholder="" name="price" onChange={handleChange} />
    //       <label>Imagen</label>
    //       <input placeholder="" />
    //       <label>Tipo</label>
    //       <input placeholder="" name="type" onChange={handleChange} />
    //       <button type="submit">Finalizar</button>
    //     </form>
    //   </div>
    // </div>
  );
}

export { CreateProduct };
