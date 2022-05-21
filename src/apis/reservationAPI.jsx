import axiosInstance from "../features/Common/Http/axiosInstance";

const getAllReserving = async () => {
    const response = await axiosInstance.get("api/reservation/reserving");
    return response.data;
};
// eslint-disable-next-line import/prefer-default-export
export { getAllReserving };
