import { Route, Routes } from "react-router-dom";
import BookRoutes from "../../features/Book/Routes/BookRoutes";
import UserRoutes from "../../features/User/Routes/UserRoues";
import ReservationRouters from "../../features/Reservation/Routes/ReservationRouters";
import BorrowBookRouters from "../../features/BorrowBook/Routes/BorrowBookRouters";

const CommonRoutes = () => {
    return (
        <Routes>
            <Route path="*" element="Thực tập tốt nghiệp" />
            <Route path="book-management/*" element={<BookRoutes />} />
            <Route path="users/*" element={<UserRoutes />} />
            <Route path="reservations/*" element={<ReservationRouters />} />
            <Route path="borrowbooks/*" element={<BorrowBookRouters />} />
        </Routes>
    );
};

export default CommonRoutes;
