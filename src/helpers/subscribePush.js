import axios from "axios";

export default function subscribePush(data, token) {
  axios
    .post(
      `${process.env.REACT_APP_API_URL}/subscribe_for_push/`,
      {
        name: data.name,
        browser: data.browser,
        p256dh: data.p256dh,
        auth: data.auth,
        registration_id: data.registration_id
      },
      {
        headers: {
          Authorization: `Token ${token}`
        }
      }
    )
    .then(res => {
      console.log(res);
    })
    .catch(error => console.log(error));
}
