import axios from "axios";

export function subscribeLocation(id, token) {
  axios
    .get(`http://127.0.0.1:8000/subscribe/${id}/`, {
      headers: {
        Authorization: `Token ${token}`
      }
    })
    .catch(error => console.log(error));
}
