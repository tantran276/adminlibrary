import { Route, Routes } from "react-router-dom";
import Layout from "../../Common/Layout/Layout";
import BorrowingBookManagement from "../BorrowingBookManagement";
import BorrowBookManagement from "../BorrowBookManagement";

const ReservationRouters = () => {
    return (
        <Layout>
            <Routes>
                <Route path="borrowing" index element={<BorrowingBookManagement />} />
                <Route path="history" index element={<BorrowBookManagement />} />
            </Routes>
        </Layout>
    );
};
export default ReservationRouters;
