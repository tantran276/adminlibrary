import { Route, Routes } from "react-router-dom";
import BookRoutes from "../../features/Book/Routes/BookRoutes";

const CommonRoutes = () => {
    return (
        <Routes>
            <Route path="books/*" element={<BookRoutes />} />
        </Routes>
    );
};

export default CommonRoutes;
