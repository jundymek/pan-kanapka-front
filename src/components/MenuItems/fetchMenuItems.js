import axios from "axios";

export function fetchMenuItems() {
  return axios
    .get(`${process.env.REACT_APP_API_URL}/api/menu_items/`)
    .then(res => {
      return res.data;
    })
    .catch(error => console.log(error));
}
