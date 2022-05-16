import axios from "axios";

const getBooks = async () => {
    const config = {
        method: "get",
        url: "http://localhost:8080/api/books",
        headers: {},
    };

    const response = await axios(config);
    return response.data;
};

const postBook = async (data) => {
    const config = {
        method: "post",
        url: "http://localhost:8080/api/books",
        headers: {
            "Content-Type": "application/json",
        },
        data,
    };

    const response = await axios(config);
    return response.data;
};

export { getBooks, postBook };
