import { Route, Routes } from "react-router-dom";
import AuthRoutes from "../../features/Auth/Routes/AuthRoutes";
import ProtectedRoutes from "./ProtectedRoutes";

const CommonRoutes = () => {
    return (
        <Routes>
            <Route path="/*" element={<ProtectedRoutes />} />
            <Route path="auth/*" element={<AuthRoutes />} />
        </Routes>
    );
};

export default CommonRoutes;
