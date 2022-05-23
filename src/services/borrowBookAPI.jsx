import axiosInstance from "../features/Common/Utils/axiosInstance";

const getAllBorrowBook = async (page, perPage) => {
    const response = await axiosInstance.get("/api/borrowbook", {
        params: {
            offset: page - 1,
            pageSize: perPage,
        },
    });
    return response.data;
};

const getAllBorrowingBook = async (page, perPage) => {
    const response = await axiosInstance.get("/api/borrowbook/borrowing", {
        params: {
            offset: page - 1,
            pageSize: perPage,
        },
    });
    return response.data;
};
const renewalBorrowBook = async (data) => {
    const url = `api/borrowbook/renewal/${data.id}`;
    await axiosInstance.put(url, {});
    return data;
};

const returnBorrowBook = async (data) => {
    const url = `/api/borrowbook/return/${data.id}`;
    await axiosInstance.put(url, {});
    return data;
};

export { getAllBorrowBook, getAllBorrowingBook, renewalBorrowBook, returnBorrowBook };
