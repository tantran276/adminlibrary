import { Route, Routes } from "react-router-dom";
import Layout from "../../Common/Layout/Layout";
import ReservationManagement from "../ReservationManagement";

const ReservationRouters = () => {
    return (
        <Layout>
            <Routes>
                <Route path="*" element={<ReservationManagement />} />
            </Routes>
        </Layout>
    );
};
export default ReservationRouters;
