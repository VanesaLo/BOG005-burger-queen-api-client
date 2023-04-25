import React, { useState } from "react";
import editar from "../../images/edit.png";
import Delete from "../../images/delete.png";
// import { imageProducts } from "../../utils/petitions";
import { editProducts, deleteProduct } from "../../utils/petitions";
import Swal from "sweetalert2";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";

function EditProducts({ name, price, type, id,}) {
  // const [imgProduct, setImgProduct] = useState("");

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [deleteDataProduct, setDeleteDataProduct] = useState(false);
  const [editDataProduct, setEditDataProduct] = useState({
    id: id,
    name: name,
    price: price,
    type: type,
  });
  // const [isOpenModal, openModal, closeModal] = useModal(false);

  const handleChangeProduct = (e) => {
    setEditDataProduct({
      ...editDataProduct,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmitProduct = (e) => {
    e.preventDefault();
    editProducts(editDataProduct)
      .then((res) => {
        // localStorage.setItem("userUpdate", JSON.stringify(res.data));
        if (res.status === 200) {
          Swal.fire("Good job!", "You clicked the button!", "success");
        }
        console.log(res.status);
      })
      .catch((error) => {
        console.log(error);
        Swal.fire("Error!", "Tenemos un problema, intenta de nuevo", "error");
      });
  };

  const handleSubmitDelete = () => {
    deleteProduct(id);
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

          setDeleteDataProduct(!deleteDataProduct);
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

  // async function onChangeImg(event, setImgProduct) {
  //   const uploadedImg = await event.target.files[0];
  //   const fr = new FileReader();
  //   fr.readAsDataURL(uploadedImg);
  //   fr.onload = () => setImgProduct(fr.result);
  //   return uploadedImg;
  // }

  // const imageProductChange = async (event) => {
  //   const urlUpload = await onChangeImg(event, setImgProduct);
  //   console.log("urlUpload", urlUpload);
  //   const urlImage = await imageProducts(urlUpload);
  //   setImgProduct(urlImage);
  //};

  return (
    <>
    <td>
      <img
        onClick={handleShow}
        style={{ height: "20px", width: "20px" }}
        src={editar}
        alt="editar"
      />

      <img
        onClick={handleSubmitDelete}
        style={{ height: "20px", width: "20px" }}
        src={Delete}
        alt="delete"
      />

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Editar producto</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
          <Form.Group className="mb-2" controlId="exampleForm.ControlInput1">
              <Form.Label>Nombre</Form.Label>
              <Form.Control
                type="text"
                placeholder=""
                name="name"
                value={editDataProduct.name}
                onChange={handleChangeProduct}
                required
              />
              <Form.Label> Precio</Form.Label>
              <Form.Control
                type="text"
                placeholder=""
                name="price"
                value={editDataProduct.price}
                onChange={handleChangeProduct}
                required
              />
            </Form.Group>
            <Form.Group className="mb-2" controlId="exampleForm.ControlInput2">
              <Form.Label>Imagen</Form.Label>
              <Form.Control
                type="email"
                placeholder="Ingrese la imagen del producto"
                onChange={handleChangeProduct}
              />
            </Form.Group>
            <Form.Group className="mb-2" controlId="exampleForm.ControlInput3">
              <Form.Label>Tipo</Form.Label>
              <Form.Control
                type="text"
                name="type"
                value={editDataProduct.type}
                onChange={handleChangeProduct}
                required
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleSubmitProduct}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
      </td>
    </>

    
  );
}

export { EditProducts };
