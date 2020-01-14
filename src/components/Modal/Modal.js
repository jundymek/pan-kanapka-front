import React from "react";
import Modal from "react-modal";

Modal.setAppElement(".App");

function MyModal({ isModalOpen, setisModalOpen, locationName, modalStyle }) {
  const handleCloseModal = () => {
    setisModalOpen(false);
  };
  switch (modalStyle) {
    case "Subscribed":
      return (
        <ModalSubscribed
          isOpen={isModalOpen}
          setisModalOpen={setisModalOpen}
          locationName={locationName}
          handleCloseModal={handleCloseModal}
        />
      );
    case "Unsubscribed":
      return (
        <ModalUnSubscribed
          isOpen={isModalOpen}
          setisModalOpen={setisModalOpen}
          locationName={locationName}
          handleCloseModal={handleCloseModal}
        />
      );
    default:
      break;
  }
}
export default MyModal;

export function ModalSubscribed({ isOpen, locationName, handleCloseModal }) {
  return (
    <Modal isOpen={isOpen} className="modal fade-in" contentLabel="Example Modal" overlayClassName="modal-wrapper">
      <p>Dodałeś lokalizację o nazwie {locationName}: do listy subskrybowanych.</p>
      <button onClick={handleCloseModal}>X</button>
    </Modal>
  );
}

export function ModalUnSubscribed({ isOpen, locationName, handleCloseModal }) {
  return (
    <Modal isOpen={isOpen} className="modal fade-in" contentLabel="Example Modal" overlayClassName="modal-wrapper">
      <p>Wypisałeś się z subskrybowania lokalizacji o nazwie {locationName}</p>
      <button onClick={handleCloseModal}>X</button>
    </Modal>
  );
}
