import { useContext } from "react";
import Modal from "react-bootstrap/Modal";
import { useHistory } from "react-router-dom";

import { AppContext } from "../../context/AppContext";

export const MyModal = ({ nombre, imagen_producto }) => {
  const { showModal, onCloseModal, modalInfo } = useContext(AppContext);

  let history = useHistory();

  const onGetContact = () => {
    onCloseModal();
    return history.push("/");
  };

  return (
    <Modal show={showModal} onHide={onCloseModal}>
      <Modal.Header closeButton>
        <Modal.Title>{modalInfo.nombre}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <img
          src={modalInfo.imagen_producto}
          alt={modalInfo.nombre}
          id="image"
        />
        <p>
          Ipsum is simply dummy text of the printing and typesetting industry.
          Lorem Ipsum has been the industry's standard dummy text ever since the
          1500s.
        </p>
      </Modal.Body>
      <Modal.Footer>
        <button
          type="button"
          className="btn btn-secondary"
          onClick={onGetContact}
        >
          Contáctanos
        </button>
      </Modal.Footer>
    </Modal>
  );
};