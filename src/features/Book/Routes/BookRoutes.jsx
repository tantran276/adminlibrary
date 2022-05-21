import { Route, Routes } from "react-router-dom";
import Layout from "../../Common/Layout/Layout";
import BookManagement from "../BookManagement";
import BorrowBookManagement from "../BorrowBookManagement";
import CopyManagement from "../CopyManagement";
import ReservationManagement from "../ReservationManagement";

const BookRoutes = () => {
    return (
        <Layout>
            <Routes>
                <Route path="copies" index element={<CopyManagement />} />
                <Route path="books" index element={<BookManagement />} />
                <Route path="reservations" index element={<ReservationManagement />} />
                <Route path="borrows" index element={<BorrowBookManagement />} />
            </Routes>
        </Layout>
    );
};

export default BookRoutes;
