import axios from "axios";

export function sendNotification(id, token) {
  axios
    .post(`http://127.0.0.1:8000/api/send_notification/${id}`, {}, {
      headers: {
        Authorization: `Token ${token}`
      },
    }).then(res => console.log(res))
    .catch(error => console.log(error));
}
