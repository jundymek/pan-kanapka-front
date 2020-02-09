import React, {useState} from "react";
import MenuItemEdit from "./MenuItemEdit";
import { MenuItemNormal } from "./MenuItemNormal";

function MenuItem({item, handleDelete}) {
  const [isEditable, setIsEditable] = useState(false)
  return (
    <>
    {!isEditable ? 
      <MenuItemNormal item={item} handleDelete={handleDelete} setIsEditable={setIsEditable}/>
      :
      <MenuItemEdit item={item} setIsEditable={setIsEditable}/>
    }
    </>
  );
}

export default MenuItem;


