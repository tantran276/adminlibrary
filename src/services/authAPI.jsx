import axiosInstance from "../features/Common/Utils/axiosInstance";

// eslint-disable-next-line import/prefer-default-export
export const loginWithUsernameAndPassword = async (username, password) => {
    const response = await axiosInstance.post(
        "api/auth/adminsignin",
        {
            username,
            password,
        },
        {
            redirectWhenError: false,
        }
    );
    return response.data;
};

export const getMe = async () => {
    const response = await axiosInstance.get("api/users/me");
    return response.data;
};
