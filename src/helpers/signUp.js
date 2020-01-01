import axios from "axios";

export default function signUp(data) {
  return axios
    .post(
      `${process.env.REACT_APP_API_URL}/rest-auth/registration/`,
      {
        username: data.username,
        password1: data.password1,
        password2: data.password2
      },
    )
}
