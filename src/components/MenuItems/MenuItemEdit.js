import React, { useState } from "react";
import { connect } from "react-redux";
import axios from "axios";

function MenuItemEdit({ item, setIsEditable, token, setMenuItems }) {
  const [titleValue, setTitleValue] = useState(item.name);
  const [descriptionValue, setDescriptionValue] = useState(item.description);
  const [priceValue, setPriceValue] = useState(item.price);
  const [selectedImage, setSelectedImage] = useState(null);
  const onChangeInput = (e, fieldToChange) => {
    switch (fieldToChange) {
      case "title":
        setTitleValue(e.target.value);
        break;
      case "description":
        setDescriptionValue(e.target.value);
        break;
      case "price":
        setPriceValue(e.target.value);
        break;
      default:
        break;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    const data = new FormData();
    data.append("name", titleValue);
    data.append("price", priceValue);
    if (selectedImage) {
      data.append("image", selectedImage);
    }
    data.append("description", descriptionValue);
    console.log(data);
    axios
      .patch(`${process.env.REACT_APP_API_URL}/api/menu_items/${item.id}/`, data, {
        headers: {
          Authorization: `Token ${token}`
        }
      })
      .then(res => {
        setIsEditable(false);
        setMenuItems(prevState => prevState.map(item => (item.id === res.data.id ? res.data : item)));
      })
      .catch(function(error) {
        console.log(error);
      });
  };

  const onChangeImage = e => {
    setSelectedImage(e.target.files[0]);
    console.log(e.target.files[0]);
  };

  return (
    <form key={item.id} className="menu__block menu__block--editable">
      <input
        className="menu__block-price menu__block-price--editable"
        type="number"
        value={priceValue}
        onChange={e => onChangeInput(e, "price")}
      />
      PLN
      <div className="menu__block-wrapper">
        <input
          className="menu__block-title menu__block-title--editable"
          type="text"
          value={titleValue}
          onChange={e => onChangeInput(e, "title")}
        />
        <img
          src={item.image ? item.image : require("../../images/no_image.svg")}
          alt="Zdjęcie dania"
          className="menu__block-image"
        />
        <input
          className="input-change-image"
          type="file"
          name="file"
          accept="image/x-png,image/gif,image/jpeg"
          aria-label="Obrazek dania"
          onChange={onChangeImage}
        />
      </div>
      <textarea
        className="menu__block-description menu__block-description--editable"
        type="text"
        value={descriptionValue}
        onChange={e => onChangeInput(e, "description")}
      />
      <div className="menu__buttons-wrapper">
        <button onClick={handleSubmit} className="menu__button">
          <img
            className="menu__button-image"
            src={require("../../images/confirm_icon1.svg")}
            alt="Przycisk akceptuj"
            title="Akceptuj"
          />
        </button>
        <button onClick={() => setIsEditable(false)} className="menu__button">
          <img
            className="menu__button-image"
            src={require("../../images/cancel_icon.svg")}
            alt="Przycisk anuluj"
            title="Anuluj"
          />
        </button>
      </div>
    </form>
  );
}

const mapStateToProps = state => ({
  token: state.auth.token
});

export default connect(mapStateToProps)(MenuItemEdit);
