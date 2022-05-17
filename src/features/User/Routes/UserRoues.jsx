import { Route, Routes } from "react-router-dom";
import Layout from "../../Common/Layout/Layout";
import UserManagement from "../UserManagement";

const UserRoutes = () => {
    return (
        <Layout>
            <Routes>
                <Route path="*" index element={<UserManagement />} />
            </Routes>
        </Layout>
    );
};

export default UserRoutes;
