import React, { useState } from "react";
import MenuItemEdit from "./MenuItemEdit";
import MenuItemNormal from "./MenuItemNormal";

function MenuItem({ item, handleDelete, setMenuItems }) {
  const [isEditable, setIsEditable] = useState(false);
  
  const checkIfImageExists = url => {
    const http = new XMLHttpRequest();
    http.open("HEAD", url, false);
    http.send();
    return http.status !== 404;
  };

  const itemImageUrl = () => {
    if (item.image && checkIfImageExists(item.image)) {
      return item.image;
    }
  };
  return (
    <>
      {!isEditable ? (
        <MenuItemNormal
          item={item}
          handleDelete={handleDelete}
          setIsEditable={setIsEditable}
          itemImageUrl={itemImageUrl}
        />
      ) : (
        <MenuItemEdit
          item={item}
          setIsEditable={setIsEditable}
          setMenuItems={setMenuItems}
          itemImageUrl={itemImageUrl}
        />
      )}
    </>
  );
}

export default MenuItem;
