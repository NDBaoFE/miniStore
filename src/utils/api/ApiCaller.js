import axios from "axios";

import { API_URL } from "../../config/index";
console.log(API_URL);
const defaultURL = "http://localhost:8080";
// This is config default for axios caller
const ApiCaller = (method, endpoint, headers, params, body) => {
    return axios({
        method,
        url: defaultURL + endpoint,
        headers: Object.assign({}, headers),
        params: Object.assign({}, params),
        data: body,
    });
};

// Below are all methods we can call. If you want another method, create it likes them.
// When you call an api, if any part that you don't need, just skip it or pass an empty object {}.
// for example: post(endpoint, {}, { username, password })
export const get = (endpoint, params, headers) => {
    return ApiCaller("GET", endpoint, headers, params);
};

export const post = (endpoint, body, params, headers) => {
    return ApiCaller("POST", endpoint, headers, params, body);
};

export const put = (endpoint, body, params, headers) => {
    return ApiCaller("PUT", endpoint, headers, params, body);
};

export const remove = (endpoint, body, params, headers) => {
    return ApiCaller("DELETE", endpoint, headers, params, body);
};
