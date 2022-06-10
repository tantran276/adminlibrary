import "react-datepicker/dist/react-datepicker.css";
import Layout from "../Common/Layout/Layout";
import Overview from "./Components/Overview";
import UserAnalyticsByMonth from "./Components/UserAnalyticsByMonth";

const Dashboard = () => {
    return (
        <Layout>
            <Overview />
            <UserAnalyticsByMonth />
        </Layout>
    );
};

export default Dashboard;
