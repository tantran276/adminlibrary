import { Route, Routes } from "react-router-dom";
import BookRoutes from "../../features/Book/Routes/BookRoutes";
import UserRoutes from "../../features/User/Routes/UserRoues";
import ReservationRouters from "../../features/Reservation/Routes/ReservationRouters";

const CommonRoutes = () => {
    return (
        <Routes>
            <Route path="books/*" element={<BookRoutes />} />
            <Route path="users/*" element={<UserRoutes />} />
            <Route path="reservations/*" element={<ReservationRouters />} />
        </Routes>
    );
};

export default CommonRoutes;
