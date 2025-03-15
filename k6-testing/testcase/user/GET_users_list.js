import { HttpClient } from "/utils/httpClient.js";
import { ENV } from "/config/env.js";
import { check } from "k6";

//https://reqres.in/api/users?page=2
export default function () {
  const api = new HttpClient();
  const res = api.get(
    `${ENV.dev.API_PATHS.USER}?page=${ENV.dev.FIXED_USER.PAGE}`
  );
  console.log("Response status: " + res.status);
  console.log("Respond message: " + res.body);

  api.checkStatus200(res);
  let responseMsg = JSON.parse(res.body);


  check(res, {
    "is page 2": (r) => responseMsg.page === 2,
    "is first user id 7": (r) => responseMsg.data[0].id === 7,
    "is first user email correct": (r) => responseMsg.data[0].email === "michael.lawson@reqres.in",
  });
}
