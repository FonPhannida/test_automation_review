import { HttpClient } from "/utils/httpClient.js";
import { ENV } from "/config/env.js";
import { check } from "k6";

export default function () {
  const api = new HttpClient();
  const res = api.get(
    `${ENV.dev.API_PATHS.USER}/${ENV.dev.FIXED_USER.VALID_USERID}`
  );

  console.log("Response status: " + res.status);
  console.log("Respond message: " + res.body);

  api.checkStatus200(res);
  let responseMsg = JSON.parse(res.body);


  check(res, {
    "is user id 2": (r) => responseMsg.data.id === 2,
    "is user email 'janet.weaver@reqres.in'": (r) => responseMsg.data.email === 'janet.weaver@reqres.in',
    "is first name 'Janet'": (r) => responseMsg.data.first_name === "Janet",
  });
}
