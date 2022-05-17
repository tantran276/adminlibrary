import { Route, Routes } from "react-router-dom";
import BookRoutes from "../../features/Book/Routes/BookRoutes";
import UserRoutes from "../../features/User/Routes/UserRoues";

const CommonRoutes = () => {
    return (
        <Routes>
            <Route path="*" element="Thực tập tốt nghiệp" />
            <Route path="book-management/*" element={<BookRoutes />} />
            <Route path="users/*" element={<UserRoutes />} />
        </Routes>
    );
};

export default CommonRoutes;
