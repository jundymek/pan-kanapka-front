import React, { useState, useRef } from "react";
import axios from "axios";
import Button from "../Button/Button";

export function AddNewMenuItem(props) {
  const [selectedImage, setSelectedImage] = useState(null);
  const name = useRef(null);
  const description = useRef(null);
  const price = useRef(null);
  const image = useRef(null);

  const onChangeImage = e => {
    setSelectedImage(e.target.files[0]);
    console.log(e.target.files[0]);
  };

  const handleSubmit = e => {
    e.preventDefault();
    const data = new FormData();
    data.append("name", name.current.value);
    data.append("price", price.current.value);
    if(selectedImage) {
      data.append("image", selectedImage);
    }
    data.append("description", description.current.value);
    axios
      .post(`${process.env.REACT_APP_API_URL}/api/menu_items/`, data, {
        headers: {
          Authorization: `Token ${props.token}`
        }
      })
      .then(res => {
        props.setMenuItems(prevState => prevState.concat(res.data));
      })
      .then(() => {
        clearInputFields();
      })
      .catch(function(error) {
        console.log(error);
      });
  };

  function clearInputFields() {
    name.current.value = null;
    description.current.value = null;
    price.current.value = null;
    image.current.value = null;
  }

  return (
    <section className="menu-form-wrapper">
      <h3 className="menu-form-wrapper__title">Dodaj nowy przysmak</h3>
      <form className="menu-form" onSubmit={handleSubmit}>
        <div className="menu-form__input-wrapper menu-form__input-wrapper--title">
          <input
            className="menu-form__input menu-form__input--title"
            aria-label="nazwa dania"
            placeholder="Nazwa dania"
            type="text"
            ref={name}
            required
          />
        </div>
        <div className="menu-form__input-wrapper menu-form__input-wrapper--description">
          <textarea
            className="menu-form__input menu-form__input--description"
            type="text"
            aria-label="opis dania"
            placeholder="Opis dania"
            ref={description}
            required
          />
        </div>
        <div className="menu-form__input-wrapper menu-form__input-wrapper--price">
          <input
            className="menu-form__input menu-form__input--price"
            type="number"
            step="0.01"
            aria-label="cena dania"
            placeholder="Cena dania"
            ref={price}
            required
          />
        </div>
        <div className="menu-form__input-wrapper menu-form__input-wrapper--image">
          <input
            className="menu-form__input menu-form__input--image"
            type="file"
            name="file"
            accept="image/x-png,image/gif,image/jpeg"
            aria-label="Obrazek dania"
            onChange={onChangeImage}
            ref={image}
          />
        </div>
        <Button label="Dodaj" variant="add" />
      </form>
    </section>
  );
}
