import React from "react";
import Modal from "react-modal";
import { modalBlurBackground } from "../../helpers/modalBlurBackground";
import Button from "../Button/Button";

Modal.setAppElement("body");

function MyModal({
  isModalOpen,
  setisModalOpen,
  locationName,
  modalStyle,
  locationId,
  token,
  deleteLocation,
  setmodalStyle,
  username
}) {
  const handleCloseModal = () => {
    modalBlurBackground();
    setisModalOpen(false);
  };
  if (isModalOpen) {
    modalBlurBackground();
  }
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
    case "LoggedIn":
      return (
        <ModalLogged
          isOpen={isModalOpen}
          setisModalOpen={setisModalOpen}
          username={username}
          handleCloseModal={handleCloseModal}
        />
      );
    case "LoggedOut":
      return (
        <ModalLoggedOut isOpen={isModalOpen} setisModalOpen={setisModalOpen} handleCloseModal={handleCloseModal} />
      );
    case "Deleted":
      return <ModalDeleted locationName={locationName} handleCloseModal={handleCloseModal} />;
    case "Added":
      return <ModalAdded locationName={locationName} handleCloseModal={handleCloseModal} />;
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
  setTimeout(() => {
    handleCloseModal();
  }, 3000);
  return (
    <Modal isOpen={isOpen} className="modal modal--info fade-in " overlayClassName="modal-wrapper">
      <p className="modal__paragraph">Dodałeś lokalizację o nazwie {locationName} do listy subskrybowanych.</p>
    </Modal>
  );
}

export function ModalUnSubscribed({ isOpen, locationName, handleCloseModal }) {
  setTimeout(() => {
    handleCloseModal();
  }, 3000);
  return (
    <Modal isOpen={isOpen} className="modal modal--info tilt-in-top-1" overlayClassName="modal-wrapper">
      <p className="modal__paragraph">Wypisałeś się z subskrybowania lokalizacji o nazwie {locationName}.</p>
    </Modal>
  );
}

export function ModalDeleted({ locationName, handleCloseModal }) {
  setTimeout(() => {
    handleCloseModal();
  }, 3000);
  return (
    <Modal
      isOpen={true}
      locationName={locationName}
      className="modal modal--info fade-in"
      overlayClassName="modal-wrapper"
    >
      <p className="modal__paragraph">Lokalizacja {locationName} zostałą usunięta</p>
    </Modal>
  );
}
export function ModalAdded({ locationName, handleCloseModal }) {
  setTimeout(() => {
    handleCloseModal();
  }, 3000);
  return (
    <Modal
      isOpen={true}
      locationName={locationName}
      className="modal modal--info fade-in"
      overlayClassName="modal-wrapper"
    >
      <p className="modal__paragraph">Lokalizacja {locationName} zostałą dodana</p>
    </Modal>
  );
}
export function ModalLogged({ username, handleCloseModal }) {
  setTimeout(() => {
    handleCloseModal();
  }, 3000);
  return (
    <Modal isOpen={true} username={username} className="modal modal--info fade-in" overlayClassName="modal-wrapper">
      <p className="modal__paragraph">Zostałeś pomyślnie zalogowany jako {username}</p>
    </Modal>
  );
}
export function ModalLoggedOut({ handleCloseModal }) {
  setTimeout(() => {
    handleCloseModal();
  }, 3000);
  return (
    <Modal isOpen={true} className="modal modal--info fade-in" overlayClassName="modal-wrapper">
      <p className="modal__paragraph">Zostałeś pomyślnie wylogowany</p>
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
    <Modal
      isOpen={isOpen}
      locationName="locationName"
      className="modal modal--confirm fade-in"
      overlayClassName="modal-wrapper"
    >
      <p className="modal__paragraph">Czy usunąć kartę lokalizacji {locationName} ?</p>
      <div className="modal-buttons-wrapper">
        <Button onClick={handleConfirm} label="Potwierdź" variant="confirm" />
        <Button onClick={handleCloseModal} label="Anuluj" variant="cancel" />
      </div>
    </Modal>
  );
}
