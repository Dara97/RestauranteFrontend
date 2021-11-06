import { useContext } from "react";
import Modal from "react-bootstrap/Modal";
import { useHistory } from "react-router-dom";

import { AppContext } from "../../context/AppContext";

export const MyModal = ({ name, image }) => {
  const { showModal, onCloseModal, modalInfo } = useContext(AppContext);

  let history = useHistory();

  const onGetContact = () => {
    onCloseModal();
    return history.push("/");
  };

  return (
    <Modal show={showModal} onHide={onCloseModal}>
      <Modal.Header closeButton>
        <Modal.Title>{modalInfo.name}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <img
          src={`/images/${modalInfo.image}`}
          alt={modalInfo.name}
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
