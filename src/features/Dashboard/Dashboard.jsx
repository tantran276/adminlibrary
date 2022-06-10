import "react-datepicker/dist/react-datepicker.css";
import Layout from "../Common/Layout/Layout";
import BorrowingAnalyticsByMonth from "./Components/BorrowingAnalyticsByMonth";
import Overview from "./Components/Overview";
import UserAnalyticsByMonth from "./Components/UserAnalyticsByMonth";

const Dashboard = () => {
    return (
        <Layout>
            <Overview />
            <UserAnalyticsByMonth />
            <BorrowingAnalyticsByMonth />
        </Layout>
    );
};

export default Dashboard;
