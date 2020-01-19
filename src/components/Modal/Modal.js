import React from "react";
import Modal from "react-modal";

Modal.setAppElement(".App");

function MyModal({
  isModalOpen,
  setisModalOpen,
  locationName,
  modalStyle,
  locationId,
  token,
  deleteLocation,
  setmodalStyle
}) {
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
    case "Deleted":
      return <ModalDeleted locationName={locationName} />;
    case "DeleteConfirmation":
      return (
        <ModalDeleteConfirmation
          isOpen={isModalOpen}
          setisModalOpen={setisModalOpen}
          locationName={locationName}
          handleCloseModal={handleCloseModal}
          locationId={locationId}
          token={token}
          deleteLocation={deleteLocation}
          setmodalStyle={setmodalStyle}
        />
      );
    default:
      break;
  }
}
export default MyModal;

export function ModalSubscribed({ isOpen, locationName, handleCloseModal }) {
  return (
    <Modal isOpen={isOpen} className="modal fade-in" overlayClassName="modal-wrapper">
      <p>Dodałeś lokalizację o nazwie {locationName}: do listy subskrybowanych.</p>
      <button onClick={handleCloseModal}>X</button>
    </Modal>
  );
}

export function ModalUnSubscribed({ isOpen, locationName, handleCloseModal }) {
  return (
    <Modal isOpen={isOpen} className="modal fade-in" overlayClassName="modal-wrapper">
      <p>Wypisałeś się z subskrybowania lokalizacji o nazwie {locationName}</p>
      <button onClick={handleCloseModal}>X</button>
    </Modal>
  );
}

export function ModalDeleted({ locationName }) {
  return (
    <Modal isOpen={true} locationName={locationName} className="modal fade-in" overlayClassName="modal-wrapper">
      <p>Lokalizacja {locationName} zostałą usunięta</p>
    </Modal>
  );
}

export function ModalDeleteConfirmation({
  isOpen,
  locationName,
  handleCloseModal,
  locationId,
  token,
  deleteLocation,
  setmodalStyle
}) {
  const handleConfirm = () => {
    setmodalStyle("Deleted");
    setTimeout(() => {
      deleteLocation(locationId, token);
      handleCloseModal();
    }, 3000);
  };
  return (
    <Modal isOpen={isOpen} locationName="locationName" className="modal fade-in" overlayClassName="modal-wrapper">
      <p>Czy usunąć kartę lokalizacji {locationName} ?</p>
      <button onClick={handleCloseModal}>Anuluj</button>
      <button onClick={handleConfirm}>Potwiedź</button>
    </Modal>
  );
}
