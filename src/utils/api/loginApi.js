import {post } from "./ApiCaller";
const token = localStorage.getItem("Authorization");

const loginApi = {
    login: (email, password) => {
        const url = "/login";
        return post(
            url,
            {
                email: email,
                password: password,
            },
            {},
            {}
        );
    },
}


export default loginApi