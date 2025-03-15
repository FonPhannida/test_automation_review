import { HttpClient } from "/utils/httpClient.js";
import { ENV } from "/config/env.js";
import { check, sleep } from "k6";
import { Trend } from 'k6/metrics';

// Custom metric to track response times
let myTrend = new Trend("my_custom_metric");

// The default options for the test
export let options = {
  stages: [
    { duration: "30s", target: 10 }, // Ramp up to 10 virtual users over 30 seconds
    { duration: "1m", target: 10 }, // Stay at 10 virtual users for 1 minute
    { duration: "30s", target: 0 }, // Ramp down to 0 virtual users over 30 seconds
  ],
};

// The function that will be executed by each virtual user
export default function () {
  const api = new HttpClient();
  const res = api.get(
    `${ENV.dev.API_PATHS.USER}/${ENV.dev.FIXED_USER.VALID_USERID}`
  );
  myTrend.add(res.timings.duration);
  console.log("Response status: " + res.status);
  console.log("Respond message: " + res.body);

  api.checkStatus200(res);
  let responseMsg = JSON.parse(res.body);

  check(res, {
    "is user id 2": (r) => responseMsg.data.id === 2,
    "is user email 'janet.weaver@reqres.in'": (r) =>
      responseMsg.data.email === "janet.weaver@reqres.in",
    "is first name 'Janet'": (r) => responseMsg.data.first_name === "Janet",
  });

  // Add some thinking time between requests (simulate real user)
  sleep(1);
}
