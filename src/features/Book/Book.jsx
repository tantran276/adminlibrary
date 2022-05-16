import { useEffect, useState } from "react";
import { bookAPI } from "../../apis";

const BookManagement = () => {
    const [, setBooks] = useState([]);
    // const [isShownCreateModal, setIsShownCreateModal] = useState(false);
    // const [isShownUpdateModal, setIsShownUpdateModal] = useState(false);

    // const toggleCreateModal = () => {
    //     setIsShownCreateModal(!isShownCreateModal);
    // };

    // const toggleUpdateModal = () => {
    //     setIsShownUpdateModal(!isShownUpdateModal);
    // };

    useEffect(() => {
        bookAPI.getBooks().then(setBooks);
    }, []);

    return <>Book Management</>;
};

export default BookManagement;
