import React, { useState, useEffect, useRef } from "react";
import { connect } from "react-redux";
import axios from "axios";

function MenuItems(props) {
  const [menuItems, setMenuItems] = useState(null);

  useEffect(() => {
    async function getData() {
      await axios
      .get(`${process.env.REACT_APP_API_URL}/api/menu_items/`)
      .then(res => {
        console.log(res);
        setMenuItems(res.data);
      })
      .catch(error => console.log(error));
    }
    getData();
  }, []);

  return (
    <section>
      {menuItems &&
        menuItems.map((item, index) => (
          <div key={index}>
            <p>{item.name}</p>
            <img src={item.image} alt="" />
          </div>
        ))}
      <AddNewMenuItem token={props.token} setMenuItems={setMenuItems} />
    </section>
  );
}

const mapStateToProps = state => ({
  token: state.auth.token
});
export default connect(mapStateToProps)(MenuItems);

function AddNewMenuItem(props) {
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
        props.setMenuItems(prevState => prevState.concat(res.data))
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
