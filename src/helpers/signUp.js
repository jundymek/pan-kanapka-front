import axios from "axios";

export default function signUp(data) {
  return axios
    .post(
      `https://pan-kanapka-api.herokuapp.com/rest-auth/registration/`,
      {
        username: data.username,
        password1: data.password1,
        password2: data.password2
      },
    )
}
