import { LOCAL_STORAGE_NAME } from "../Constants/Common";

const getStorageData = () => {
    const storage = localStorage.getItem(LOCAL_STORAGE_NAME);
    const data = storage ? JSON.parse(storage) : {};
    return data;
};

const storage = {
    get: (key) => {
        return getStorageData()[String(key)];
    },
    set: (key, value) => {
        const data = getStorageData();
        data[String(key)] = value;
        localStorage.setItem(LOCAL_STORAGE_NAME, JSON.stringify(data));
    },
};

export default storage;
