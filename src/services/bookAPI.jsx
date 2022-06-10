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

const deleteBookById = async (id) => {
    const response = await axiosInstance.delete(`api/books/${id}`);
    return response.data;
};

const updateImage = async (isbn, image) => {
    const data = new FormData();
    data.append("file", image);
    const response = await axiosInstance.put(`api/books/image/${isbn}`, data);
    return response.data;
};

const getAnalyticsByMonth = async (month, year) => {
    const startDate = `${year}-${month}-01`;
    const endDate = dayjs(startDate).add(dayjs(startDate).daysInMonth(), "day").format("YYYY-MM-DD");

    return axiosInstance.get("api/borrowbook/countformonth", {
        params: {
            from: startDate,
            to: endDate,
        },
    });
};

const getLifetimeAnalytics = async () => {
    return axiosInstance.get("api/books/count");
};

export { getBooks, createBook, updateBook, deleteBookById, updateImage, getAnalyticsByMonth, getLifetimeAnalytics };
