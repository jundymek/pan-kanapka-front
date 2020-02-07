import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { deleteMenuItem } from "./deleteMenuItem";
import { AddNewMenuItem } from "./AddNewMenuItem";
import { fetchMenuItems } from "./fetchMenuItems";

function MenuItems(props) {
  const [menuItems, setMenuItems] = useState(null);

  useEffect(() => {
    fetchMenuItems()
      .then(res => {
        if (res.length > 0) {
          setMenuItems(res);
        }
      })
      .catch(err => console.log(err));
  }, []);

  const handleDelete = id => {
    deleteMenuItem(id, props.token)
      .then(() => {
        setMenuItems(prevState => prevState.filter(item => item.id !== id));
      })
      .catch(err => console.log(err));
  };

  return (
    <section className="menu">
      {menuItems ? (
        menuItems.map(item => (
          <div key={item.id} className="menu__block">
            <p className="menu__block-price">{item.price} PLN</p>
            <div className="menu__block-wrapper">
              <h4 className="menu__block-title">{item.name}</h4>
              <img src={item.image} alt="" className="menu__block-image" />
            </div>
            <p className="menu__block-description">{item.description}</p>
            <div className="menu__buttons-wrapper">
              <button onClick={() => console.log('edit')} className="menu__button"><img src={require("../../images/edit_icon.svg")} alt="Przycisk edytuj" title="Edytuj" /></button>
              <button onClick={() => handleDelete(item.id)} className="menu__button"><img src={require("../../images/delete_icon1.svg")} alt="Przycisk usuń" title="Usuń"/></button>
            </div>
          </div>
        ))
      ) : (
        <h2>Aktualnie brak kanapek... :(</h2>
      )}
      <AddNewMenuItem token={props.token} setMenuItems={setMenuItems} />
    </section>
  );
}

const mapStateToProps = state => ({
  token: state.auth.token
});
export default connect(mapStateToProps)(MenuItems);
