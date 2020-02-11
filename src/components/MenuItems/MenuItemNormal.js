import React from "react";
import { connect } from "react-redux";

function MenuItemNormal({item, handleDelete, setIsEditable, user}) {
  const handleEdit = () => {
    setIsEditable(true)
  }
  return (
    <div key={item.id} className="menu__block">
      <p className="menu__block-price">{item.price} PLN</p>
      <div className="menu__block-wrapper">
        <h4 className="menu__block-title">{item.name}</h4>
        <img src={item.image} alt="" className="menu__block-image" />
      </div>
      <p className="menu__block-description">{item.description}</p>
      <div className="menu__buttons-wrapper">
        {user === "admin" && 
        <>
          <button onClick={handleEdit} className="menu__button">
            <img
              className="menu__button-image"
              src={require("../../images/edit_icon.svg")}
              alt="Przycisk edytuj"
              title="Edytuj"
            />
          </button>
          <button onClick={() => handleDelete(item.id)} className="menu__button">
            <img
              className="menu__button-image"
              src={require("../../images/delete_icon1.svg")}
              alt="Przycisk usuń"
              title="Usuń"
            />
          </button>
        </>
      }
      </div>
    </div>
  );
}

const mapStateToProps = state => ({
  user: state.auth.username
});

export default connect(mapStateToProps)(MenuItemNormal);
