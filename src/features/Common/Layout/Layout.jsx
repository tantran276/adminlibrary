import PropTypes from "prop-types";
import Sidebar from "./Components/Sidebar";

const Layout = ({ children }) => {
    return (
        <div className="">
            <Sidebar />
            <div className="w-[calc(100% - 154px)] ml-64 p-6">{children}</div>
        </div>
    );
};

Layout.propTypes = {
    children: PropTypes.node.isRequired,
};

export default Layout;
