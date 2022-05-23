import dayjs from "dayjs";
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

const createBook = async (data) => {
    await axiosInstance.post("api/books", {
        ...data,
        isbn: String(data.isbn),
        createDate: dayjs().format("YYYY-MM-DD"),
    });
    return data;
};

const updateBook = async (data) => {
    await axiosInstance.put("api/books", {
        ...data,
        isbn: String(data.isbn),
        createDate: dayjs().format("YYYY-MM-DD"),
    });
    return data;
};

export { getBooks, createBook, updateBook };