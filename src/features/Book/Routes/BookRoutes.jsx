import { Route, Routes } from "react-router-dom";
import Layout from "../../Common/Layout/Layout";
import BookManagement from "../Book";

const BookRoutes = () => {
    return (
        <Layout>
            <Routes>
                <Route path="*" index element={<BookManagement />} />
            </Routes>
        </Layout>
    );
};

export default BookRoutes;
