import axios from "axios";
import { ERROR_PAGE_PATH } from "../Constants/URLs";
import { redirectTo } from "./helpers";
import storage from "./storage";

const createAxiosInstance = () => {
    const instance = axios.create({
        baseURL: process.env.REACT_APP_API_URL,
        timeout: 5000,
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
        },
    });

    instance.interceptors.request.use((request) => {
        const token = storage.get("token");
        if (token) {
            request.headers.Authorization = `Bearer ${token}`;
        }
        return request;
    });

    instance.interceptors.response.use(
        (response) => response,
        async (error) => {
            const { response, config } = error;
            if (response) {
                const { status } = response;
                const { redirectWhenError } = config;

                if (redirectWhenError === true) {
                    switch (status) {
                        case 401:
                            redirectTo(ERROR_PAGE_PATH.LOGIN_PATH);
                            break;

                        default:
                            redirectTo(ERROR_PAGE_PATH.SERVER_ERROR_PAGE_PATH);
                            break;
                    }
                }
            }
            return Promise.reject(error);
        }
    );

    return instance;
};

const axiosInstance = createAxiosInstance();

export default axiosInstance;
