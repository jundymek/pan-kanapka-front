import axios from "axios";

export function sendNotification(id, token) {
  axios
    .post(`${process.env.REACT_APP_API_URL}/api/send_notification/${id}`, {}, {
      headers: {
        Authorization: `Token ${token}`
      },
    }).then(res => console.log(res))
    .catch(error => console.log(error));
}
