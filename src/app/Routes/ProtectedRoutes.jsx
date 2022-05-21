import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, Route, Routes } from "react-router-dom";
import BookRoutes from "../../features/Book/Routes/BookRoutes";
import BorrowBookRouters from "../../features/BorrowBook/Routes/BorrowBookRouters";
import ReservationRouters from "../../features/Reservation/Routes/ReservationRouters";
import UserRoutes from "../../features/User/Routes/UserRoues";

import { authAPI } from "../../apis";
import LoadingOverlay from "../../features/Common/Components/Loading/LoadingOverlay";
import { LOGIN_PAGE_PATH } from "../../features/Common/Constants/URLs";
import { setUser } from "../../features/Common/Slices/userSlice";
import { redirectTo } from "../../features/Common/Utils/helpers";

const ProtectedRoutes = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const user = useSelector((state) => state.user);
    const dispatch = useDispatch();

    useEffect(() => {
        if (!user) {
            authAPI
                .getMe()
                .then((userData) => {
                    dispatch(setUser(userData));
                    setIsAuthenticated(true);
                })
                .catch(() => {
                    redirectTo(LOGIN_PAGE_PATH);
                })
                .finally(() => {
                    setIsLoading(false);
                });
        }
    }, []);

    return (
        <div>
            {isLoading ? (
                <LoadingOverlay />
            ) : (
                <div>
                    {isAuthenticated ? (
                        <Routes>
                            <Route path="/" element="Thực tập tốt nghiệp" />
                            <Route path="book-management/*" element={<BookRoutes />} />
                            <Route path="users/*" element={<UserRoutes />} />
                            <Route path="reservations/*" element={<ReservationRouters />} />
                            <Route path="borrowbooks/*" element={<BorrowBookRouters />} />
                        </Routes>
                    ) : (
                        <Navigate to={LOGIN_PAGE_PATH} />
                    )}
                </div>
            )}
        </div>
    );
};

export default ProtectedRoutes;
