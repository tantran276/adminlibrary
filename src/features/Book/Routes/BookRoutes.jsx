import { Route, Routes } from "react-router-dom";
import Layout from "../../Common/Layout/Layout";
import BookManagement from "../BookManagement";
import CopyManagement from "../CopyManagement";
import ReservationManagement from "../ReservationManagement";
import BorrowBookManagement from "../BorrowBookManagement";

const BookRoutes = () => {
    return (
        <Layout>
            <Routes>
                <Route path="copies" element={<CopyManagement />} />
                <Route path="*" index element={<BookManagement />} />
                <Route
                    path="reservations"
                    element={<ReservationManagement />}
                />
                <Route path="borrowbooks" element={<BorrowBookManagement />} />
            </Routes>
        </Layout>
    );
};

export default BookRoutes;
