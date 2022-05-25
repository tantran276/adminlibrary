import axiosInstance from "../features/Common/Utils/axiosInstance";

const getAllReserving = async (page, perPage) => {
    const response = await axiosInstance.get("api/reservation/reserving", {
        params: {
            offset: page - 1,
            pageSize: perPage,
        },
    });
    return response.data;
};

const renewalReservation = async (data) => {
    const url = `api/reservation/renewal/${data.id}`;
    await axiosInstance.put(url, {});
    return data;
};

const cancelReservation = async (data) => {
    const url = `api/reservation/admincancel/${data.id}`;
    await axiosInstance.put(url, {});
    return data;
};

const acceptReservation = async (data) => {
    const url = `api/reservation/accept/${data.id}`;
    await axiosInstance.put(url, {});
    return data;
};

const borrowBook = async (data) => {
    const url = `/api/reservation/borrow`;
    await axiosInstance.post(url, data, {});
    return data;
};

export { getAllReserving, renewalReservation, cancelReservation, borrowBook, acceptReservation };
