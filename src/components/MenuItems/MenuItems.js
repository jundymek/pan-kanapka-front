import React, { useState, useEffect, Suspense, lazy } from "react";
import { connect } from "react-redux";
import { deleteMenuItem } from "./deleteMenuItem";
import { AddNewMenuItem } from "./AddNewMenuItem";
import { fetchMenuItems } from "./fetchMenuItems";
import Collapsible from "../../hoc/Collapsible";

const MenuItem = lazy(() => import("./MenuItem"));

function MenuItems(props) {
  const [menuItems, setMenuItems] = useState([]);

  useEffect(() => {
    fetchMenuItems()
      .then(res => {
        res.length ? setMenuItems(res) : setMenuItems(null);
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
          <Suspense fallback={<div className="loader"></div>}>
            <MenuItem key={item.id} item={item} handleDelete={handleDelete} setMenuItems={setMenuItems} />
          </Suspense>
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
export default connect(mapStateToProps)(Collapsible(MenuItems));
