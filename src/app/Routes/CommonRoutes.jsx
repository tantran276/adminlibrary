import { Route, Routes } from "react-router-dom";
import BookRoutes from "../../features/Book/Routes/BookRoutes";
import UserRoutes from "../../features/User/Routes/UserRoues";

const CommonRoutes = () => {
    return (
        <Routes>
            <Route path="books/*" element={<BookRoutes />} />
            <Route path="users/*" element={<UserRoutes />} />
        </Routes>
    );
};

export default CommonRoutes;
