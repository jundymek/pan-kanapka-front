import React, { useState, useRef } from "react";
import axios from "axios";
export function AddNewMenuItem(props) {
  const [selectedImage, setSelectedImage] = useState(null);
  const name = useRef(null);
  const description = useRef(null);
  const price = useRef(null);
  
  const onChangeImage = e => {
    setSelectedImage(e.target.files[0]);
    console.log(e.target.files[0]);
  };
  
  const handleSubmit = e => {
    e.preventDefault();
    const data = new FormData();
    data.append("name", name.current.value);
    data.append("price", price.current.value);
    data.append("image", selectedImage);
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
      .catch(function(error) {
        console.log(error);
      });
  };
  return (
    <form onSubmit={handleSubmit}>
      <input aria-label="nazwa dania" placeholder="Nazwa dania" type="text" ref={name} required />
      <input type="text" aria-label="opis dania" placeholder="Opis dania" ref={description} />
      <input type="number" aria-label="cena dania" placeholder="Cena dania" ref={price} />
      <input
        type="file"
        name="file"
        accept="image/x-png,image/gif,image/jpeg"
        aria-label="Obrazek dania"
        placeholder="Nazwa dania"
        onChange={onChangeImage}
      />
      <button type="submit">Submit</button>
    </form>
  );
}
