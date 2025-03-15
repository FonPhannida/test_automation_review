import { HttpClient } from "/utils/httpClient.js";
import { ENV } from "/config/env.js";
import { check } from "k6";

export let options = {
    vus: 10,
    duration: '30s',
    ext: {
      loadimpact: {
          projectID: 1234567, // Change this to your project ID
        },
    },
};

export default function () {
    const api = new HttpClient();
  const res = api.get(
    `${ENV.dev.API_PATHS.USER}/${ENV.dev.FIXED_USER.VALID_USERID}`
  );
  api.checkStatus200(res);
  let responseMsg = JSON.parse(res.body);


  check(res, {
    "is user id 2": (r) => responseMsg.data.id === 2,
    "is user email 'janet.weaver@reqres.in'": (r) => responseMsg.data.email === 'janet.weaver@reqres.in',
    "is first name 'Janet'": (r) => responseMsg.data.first_name === "Janet",
  });
}
