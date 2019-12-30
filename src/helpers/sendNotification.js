import axios from "axios";

export function sendNotification(id, token) {
  axios
    .post(`https://pan-kanapka-api.herokuapp.com/api/send_notification/${id}`, {}, {
      headers: {
        Authorization: `Token ${token}`
      },
    }).then(res => console.log(res))
    .catch(error => console.log(error));
}
