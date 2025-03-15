import http from "k6/http";
import { check } from "k6";
import { ENV } from "/config/env.js";

export class HttpClient {
  constructor() {
    this.baseURL = ENV.dev.URL;
  }

  get(endpoint) {
    const res = http.get(`${this.baseURL}${endpoint}`);
    this.checkCommonResponse(res);
    return res;
  }

  post(endpoint, payload, params = {}) {
    const res = http.post(`${this.baseURL}${endpoint}`, payload, params);
    this.checkCommonResponse(res);
    return res;
  }

  delete(endpoint) {
    const res = http.del(`${this.baseURL}${endpoint}`);
    this.checkCommonResponse(res);
    return res;
  }

  checkCommonResponse(res) {
    check(res, {
      "is response time < 500ms": (r) => r.timings.duration < 500,
      "is response not empty": (r) => !!r.body && r.body.length > 0,
    });
  }

  checkLoginResponse(res) {
    check(res, {
      "is status 200": (r) => r.status === 200,
      "is login successful": (r) => r.json().token !== undefined,
    });
  }

  checkStatus200(res){
    check(res, {
      "is status 200": (r) => r.status === 200,
    })
  }
}
