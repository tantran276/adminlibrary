import { useCallback, useEffect, useState } from "react";
import { borrowBookAPI } from "../../services";
import Table from "../Common/Components/Table/Table";
import { setDocumentTitle } from "../Common/Utils/helpers";

const BorrowingBookManagement = () => {
    const [borrowBooks, setBorrowBooks] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const [perPage] = useState(10);

    const columns = [
        {
            title: "ID",
            dataIndex: "id",
        },
        {
            title: "Username",
            dataIndex: "username",
        },
        {
            title: "Title",
            dataIndex: "title",
        },
        {
            title: "Borrow Date",
            dataIndex: "borrowDate",
        },
        {
            title: "Expiration Date",
            dataIndex: "expirationDate",
        },
        {
            title: "Return Date",
            dataIndex: "returnDate",
        },
        {
            title: "Penalty",
            dataIndex: "penatly",
        },
        {
            title: "Status",
            dataIndex: "status",
        },
    ];

    const getBorrowingBookList = useCallback(() => {
        borrowBookAPI.getAllBorrowingBook(currentPage, perPage).then(({ content, totalPages: responseTotalPages }) => {
            const standardizedData = [];
            content.forEach((item) => {
                standardizedData.push({
                    id: item.id,
                    username: item.username,
                    title: item.title,
                    borrowBookDate: item.borrowDate,
                    expirationDate: item.expirationDate,
                    returnDate: item.returnDate,
                    penalty: item.penalty,
                    status: item.status,
                });
            });
            setBorrowBooks(standardizedData);
            setTotalPages(responseTotalPages);
        });
    }, [currentPage, perPage]);

    useEffect(() => {
        setDocumentTitle("Book Management");
    }, []);

    useEffect(() => {
        getBorrowingBookList();
    }, []);

    return (
        <>
            <div>Reserving Management</div>
            <Table
                columns={columns}
                dataSource={borrowBooks}
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

export default BorrowingBookManagement;
