import axiosInstance from "../features/Common/Utils/axiosInstance";

const getBooks = async (page, perPage) => {
    const response = await axiosInstance.get("api/books", {
        params: {
            offset: page - 1,
            pageSize: perPage,
        },
    });
    return response.data;
};

const postBook = async (data) => {
    const response = await axiosInstance.post("/books", data);
    return response.data;
};

export { getBooks, postBook };
