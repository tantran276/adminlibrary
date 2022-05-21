import { BiUserCircle } from "react-icons/bi";
import { FiBookmark } from "react-icons/fi";
import { RiDashboardLine } from "react-icons/ri";
import SidebarItem from "./SidebarItem";
import SidebarMenu from "./SidebarMenu";

const Sidebar = () => {
    return (
        <aside className="w-64 fixed z-50 top-0 left-0 bottom-0">
            <div className="overflow-y-auto py-4 dark:bg-gray-800 h-full bg-white border-r-2 border-gray-100 shadow-lg shadow-gray-100">
                <div className="mx-4 p-8 font-semibold bg-gray-100 rounded-lg text-center">
                    Logo
                </div>
                <SidebarMenu>
                    <SidebarItem
                        label="Dashboard"
                        icon={<RiDashboardLine />}
                        to="/"
                    />
                    <SidebarItem
                        label="Quản lý sách"
                        icon={<FiBookmark />}
                        to="/books"
                    />
                    <SidebarItem
                        label="Quản lý đầu sách"
                        icon={<FiBookmark />}
                        to="/books/copies"
                    />
                    <SidebarItem
                        label="Quản lý người dùng"
                        icon={<BiUserCircle />}
                        to="/users"
                    />
                    <SidebarItem
                        label="Quản lý dang ky muon sach"
                        icon={<BiUserCircle />}
                        to="/books/reservations"
                    />
                    <SidebarItem
                        label="Quản lý dang ky muon sach"
                        icon={<BiUserCircle />}
                        to="/books/borrowbooks"
                    />
                </SidebarMenu>
            </div>
        </aside>
    );
};

export default Sidebar;
