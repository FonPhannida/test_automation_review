import { HttpClient } from "../../utils/httpClient.js";
import { ENV } from "../../config/env.js";
import { check } from "k6";

export default function () {
  const api = new HttpClient();
  const url = ENV.dev.API_PATHS.LOGIN;
  console.log(`Login URL: ${url}`);

  let data = JSON.stringify({
    email: ENV.dev.FIXED_USER.INCORRECT_EMAIL,
    password: ENV.dev.FIXED_USER.INCORRECT_PASSWORD,
  });

  console.log(`Email: ${ENV.dev.FIXED_USER.INCORRECT_EMAIL}`);

  let parsedData = JSON.parse(data);
  console.log(`Email: ${parsedData.email}`);
  console.log(`Password: ${parsedData.password}`);

  let param = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  let res = api.post(url, data, param);
  console.log(`Response Status: ${res.status}`);
  console.log(`Response Body: ${res.body}`);

  check(res, {
    "is response status 400": (r) => r.status === 400,
    "is response body 'user not found'": (r) => JSON.parse(r.body).error === "user not found",
  });
}
