import axiosInstance from "../features/Common/Utils/axiosInstance";

const getUsers = async (page, perPage) => {
    const response = await axiosInstance.get("api/users", {
        params: {
            offset: page - 1,
            pageSize: perPage,
        },
    });
    return response.data;
};

const updateUser = async (data) => {
    await axiosInstance.put("api/users", {
        ...data,
    });
    return data;
};

const deleteUser = async (data) => {
    const url = `api/users/${data.id}`;
    await axiosInstance.delete(url, {});
    return data;
};

export { getUsers, updateUser, deleteUser };
