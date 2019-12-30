import axios from "axios";

export function subscribeLocation(id, token) {
  axios
    .patch(`https://pan-kanapka-api.herokuapp.com/subscribe/${id}/`, {}, {
      headers: {
        Authorization: `Token ${token}`
      },
    }).then(res => console.log(res))
    .catch(error => console.log(error));
}
