import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { deleteMenuItem } from "./deleteMenuItem";
import { AddNewMenuItem } from "./AddNewMenuItem";
import { fetchMenuItems } from "./fetchMenuItems";
import Collapsible from "../../hoc/Collapsible";
import MenuItem from "./MenuItem";

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
        menuItems.map(item => 
          <MenuItem key={item.id} item={item} handleDelete={handleDelete} setMenuItems={setMenuItems}/>
        )
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
export default connect(mapStateToProps)(Collapsible(MenuItems));
