import { BiUserCircle } from "react-icons/bi";
import { FiBookmark } from "react-icons/fi";
import { RiDashboardLine } from "react-icons/ri";
import SidebarItem from "./SidebarItem";
import SidebarMenu from "./SidebarMenu";

const Sidebar = () => {
    return (
        <aside className="fixed top-0 bottom-0 left-0 z-50 w-72">
            <div className="h-full py-4 overflow-y-auto bg-white border-r-2 border-gray-100 shadow-lg dark:bg-gray-800 shadow-gray-100">
                <div className="p-8 mx-4 font-semibold text-center bg-gray-100 rounded-lg">Logo</div>
                <SidebarMenu>
                    <SidebarItem label="Dashboard" icon={<RiDashboardLine />} to="/" />
                    <SidebarItem label="Quản lý sách" icon={<FiBookmark />} to="/books/books" />
                    <SidebarItem label="Quản lý người dùng" icon={<BiUserCircle />} to="/users" />
                    <SidebarItem label="Quản lý đăng ký mượn sách" icon={<BiUserCircle />} to="/books/reservations" />
                    <SidebarItem label="Quản lý sách đang mượn" icon={<BiUserCircle />} to="/books/borrowing" />
                    <SidebarItem label="Xem sách lịch sử mượn" icon={<BiUserCircle />} to="/books/borrowed" />
                </SidebarMenu>
            </div>
        </aside>
    );
};

export default Sidebar;
