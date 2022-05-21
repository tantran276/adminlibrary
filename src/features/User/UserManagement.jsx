import { useCallback, useEffect, useState } from "react";
import { userAPI } from "../../apis";
import Table from "../Common/Components/Table/Table";
import { setDocumentTitle } from "../Common/Utils/helpers";
import TableRowActions from "./Components/TableRowActions";

const UserManagement = () => {
    const [users, setUsers] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const [perPage] = useState(10);

    const columns = [
        {
            title: "ID",
            dataIndex: "id",
        },
        {
            title: "First Name",
            dataIndex: "firstName",
        },
        {
            title: "Last Name",
            dataIndex: "lastName",
        },
        {
            title: "Username",
            dataIndex: "username",
        },
        {
            title: "Email",
            dataIndex: "email",
        },
        {
            title: "Date Of Birth",
            dataIndex: "dateOfBirth",
        },
        {
            title: "Roles",
            dataIndex: "roles",
        },
        {
            title: "Create Date",
            dataIndex: "createDate",
        },
        {
            title: "Status",
            dataIndex: "status",
        },
        {
            title: "",
            dataIndex: "edit",
        },
    ];

    const handleClickEditButton = (action, user) => {
        if (!user) return;
        if (action === "delete") {
            userAPI.deleteUser(user).then(() => {});
        }
    };

    const getUserList = useCallback(() => {
        userAPI.getUsers(currentPage, perPage).then(({ content, totalPages: responseTotalPages }) => {
            const standardizedData = [];
            content.forEach((item) => {
                standardizedData.push({
                    id: item.id,
                    firstName: item.firstName,
                    lastName: item.lastName,
                    username: item.username,
                    email: item.email,
                    dateOfBirth: item.dateOfBirth,
                    roles: item.roles.join(", "),
                    createDate: item.createDate,
                    status: item.status,
                    edit: <TableRowActions id={item} onClick={handleClickEditButton} />,
                });
            });
            setUsers(standardizedData);
            setTotalPages(responseTotalPages);
        });
    }, [currentPage, perPage]);

    useEffect(() => {
        setDocumentTitle("User Management");
    }, []);

    useEffect(() => {
        getUserList();
    }, []);

    useEffect(() => {
        getUserList();
    }, [currentPage]);

    return (
        <>
            <div className="flex items-center justify-between">
                <div>User Management</div>
            </div>
            <Table
                columns={columns}
                dataSource={users}
                className="mt-6"
                pagination={{
                    currentPage,
                    totalPages,
                    onChangePage: (page) => setCurrentPage(page),
                }}
            />
        </>
    );
};

export default UserManagement;
