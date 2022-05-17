import axiosInstance from "../features/Common/Http/axiosInstance";

const getBooks = async () => {
    const response = await axiosInstance.get("api/books");
    return response.data;
};

const postBook = async (data) => {
    const response = await axiosInstance.post("/books", data);
    return response.data;
};

export { getBooks, postBook };
