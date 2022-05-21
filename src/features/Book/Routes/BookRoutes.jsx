import { Route, Routes } from "react-router-dom";
import Layout from "../../Common/Layout/Layout";
import BookManagement from "../BookManagement";
import CopyManagement from "../CopyManagement";

const BookRoutes = () => {
    return (
        <Layout>
            <Routes>
                <Route path="copies" index element={<CopyManagement />} />
                <Route path="books" index element={<BookManagement />} />
            </Routes>
        </Layout>
    );
};

export default BookRoutes;
