/* eslint-disable no-undef */
const publicRuntimeConfig = {
    NODE_ENV: import.meta.env.NODE_ENV || "production",
    API_URL: import.meta.env.REACT_APP_API_URL,
    LOCAL_STORAGE_TOKEN: "authorization",
    // create fake token here
};

export const { NODE_ENV, API_URL, LOCAL_STORAGE_TOKEN, TOKEN } =
    publicRuntimeConfig;
export default publicRuntimeConfig;
