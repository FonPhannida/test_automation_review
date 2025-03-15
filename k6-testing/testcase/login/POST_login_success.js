import { HttpClient } from "/utils/httpClient.js";
import { ENV } from "/config/env.js";
import { check } from "k6";

//https://reqres.in/api/login
export default function () {
  const api = new HttpClient();

  const url = ENV.dev.API_PATHS.LOGIN;
  console.log(`Login URL: ${url}`);

  let data = JSON.stringify({
    email: ENV.dev.FIXED_USER.CORRECT_EMAIL,
    password: ENV.dev.FIXED_USER.CORRECT_PASSWORD,
  });
  console.log(`Email: ${ENV.dev.FIXED_USER.CORRECT_EMAIL}`);
  console.log(`Password: ${ENV.dev.FIXED_USER.CORRECT_PASSWORD}`);

  let res = api.post(url, data, {
    headers: { "Content-Type": "application/json" },
  });
  console.log(`Response Status: ${res.status}`);
  console.log(`Response Body: ${JSON.stringify(res.json())}`);

  api.checkLoginResponse(res);
  check(res, {
    "is token returned": (r) => r.json().token === "QpwL5tke4Pnpja7X4",
  });
}
