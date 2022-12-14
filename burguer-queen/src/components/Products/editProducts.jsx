import React from "react";
import useModal from "../../Modals/useModal";
import editar from "../../images/edit.png";
import Delete from "../../images/delete.png";
import { imageProducts } from "../../utils/petitions";



function EditProducts() {
  const [isOpenModal, openModal, closeModal] = useModal(false);

  function handledSubmit(e) {
    e.preventDefault();
    closeModal();
  }

  async function onChangeImg(event , setImgProduct) {
    const uploadedImg = await event.target.files[0]
    const fr = new FileReader()
    fr.readAsDataURL(uploadedImg)
    fr.onload = () => setImgProduct(fr.result)
    return uploadedImg
  }
  
  const imageProductChange = async (event) => {
    const urlUpload = await onChangeImg(event, setImgProduct)
    console.log('urlUpload', urlUpload)
    const urlImage = await imageProducts(urlUpload)
    setImgProduct(
      urlImage
      )
    setProduct((prevState) => ({...prevState, urlImage: event.target.value}))
  }

  return (
    <td>
      <img
        onClick={openModal}
        style={{ height: "20px", width: "20px" }}
        src={editar}
        alt="editar"
      />

      <img
        onClick={openModal}
        style={{ height: "20px", width: "20px" }}
        src={Delete}
        alt="delete"
      />
      <div className={`modal ${isOpenModal && "modal-open"}`}>
        <form className="formModal" onSubmit={handledSubmit}>
          <button className="closeModal" onClick={closeModal}>
            X
          </button>
          <h1>Crear Producto</h1>
          <label>Nombre</label>
          <input placeholder="" />
          <label>Precio</label>
          <input placeholder="" />
          <label>Imagen</label>
          <input placeholder="" />
          <label>Tipo</label>
          <input placeholder="" />
          <button>Finalizar</button>
        </form>
      </div>
    </td>
  );
}

export { EditProducts };
