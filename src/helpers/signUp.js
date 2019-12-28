import axios from "axios";

export default function signUp(data) {
    console.log(data)
  return axios
    .post(
      `http://127.0.0.1:8000/rest-auth/registration/`,
      {
        username: data.username,
        password1: data.password1,
        password2: data.password2
      },
    )
    // .then(res => {
    //   console.log(res);
    // })
    // .catch(error => {
    //     console.log(error.response.data)
    // });
}
