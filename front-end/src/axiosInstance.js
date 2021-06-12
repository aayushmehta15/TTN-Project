import axios from "axios";
import Cookies from "js-cookie";

const axiosInstance = axios.create({ baseURL: "http://localhost:9000" });
axiosInstance.interceptors.request.use(
    config => {
        console.log("Request sent===>", config);
        config.headers.Authorization = Cookies.get("auth_token");
        return config;
    },
    error => {
        console.log(error);
        return Promise.reject(error);
    }
);

export default axiosInstance;
