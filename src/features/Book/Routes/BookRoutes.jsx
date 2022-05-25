import { Route, Routes } from "react-router-dom";
import Layout from "../../Common/Layout/Layout";
import BookManagement from "../BookManagement";
import BorrowingBookManagement from "../BorrowingBookManagement";
import CopyManagement from "../CopyManagement";
import ReservationManagement from "../ReservationManagement";
import BorrowedBookManagement from "../BorrowedBookManagement";

const BookRoutes = () => {
    return (
        <Layout>
            <Routes>
                <Route path="copies" index element={<CopyManagement />} />
                <Route path="books" index element={<BookManagement />} />
                <Route path="reservations" index element={<ReservationManagement />} />
                <Route path="borrowing" index element={<BorrowingBookManagement />} />
                <Route path="borrowed" index element={<BorrowedBookManagement />} />
            </Routes>
        </Layout>
    );
};

export default BookRoutes;
