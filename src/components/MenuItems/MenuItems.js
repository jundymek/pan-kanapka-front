import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { deleteMenuItem } from "./deleteMenuItem";
import { AddNewMenuItem } from "./AddNewMenuItem";
import { fetchMenuItems } from "./fetchMenuItems";

function MenuItems(props) {
  const [menuItems, setMenuItems] = useState(null);

  useEffect(() => {
    async function getData() {
      await fetchMenuItems().then(res => {
        if (res.length > 0) {
          setMenuItems(res);
        }
      });
    }
    getData();
  }, []);

  const handleDelete = id => {
    async function deleteData() {
      await deleteMenuItem(id, props.token).then(result => {
        console.log(result);
        if (result === "deleted") {
          setMenuItems(prevState => prevState.filter(item => item.id !== id));
        }
      });
    }
    deleteData();
  };

  return (
    <section>
      {menuItems &&
        menuItems.map(item => (
          <div key={item.id}>
            <p>{item.name}</p>
            <img src={item.image} alt="" />
            <button onClick={() => handleDelete(item.id)}>Delete</button>
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
