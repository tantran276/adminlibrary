import { Route, Routes } from "react-router-dom";
import BookManagement from "../Book";

const BookRoutes = () => {
    return (
        <Routes>
            <Route path="*" index element={<BookManagement />} />
        </Routes>
    );
};

export default BookRoutes;
