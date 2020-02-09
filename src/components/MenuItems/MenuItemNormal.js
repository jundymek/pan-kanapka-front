import React from "react";
export function MenuItemNormal({item, handleDelete, setIsEditable}) {
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
      </div>
    </div>
  );
}
