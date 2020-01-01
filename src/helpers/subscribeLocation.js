import axios from "axios";

export function subscribeLocation(id, token) {
  axios
    .patch(`${process.env.REACT_APP_API_URL}/subscribe/${id}/`, {}, {
      headers: {
        Authorization: `Token ${token}`
      },
    }).then(res => console.log(res))
    .catch(error => console.log(error));
}
