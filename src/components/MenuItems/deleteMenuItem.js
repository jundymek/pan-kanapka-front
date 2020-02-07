import axios from "axios";
export function deleteMenuItem(id, token) {
  return axios.delete(`${process.env.REACT_APP_API_URL}/api/menu_items/${id}`, {
    headers: {
      Authorization: `Token ${token}`
    }
  });
}
