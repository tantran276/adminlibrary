import { useCallback, useEffect, useState } from "react";
import { borrowBookAPI } from "../../services";
import Table from "../Common/Components/Table/Table";
import { setDocumentTitle } from "../Common/Utils/helpers";
import DeleteConfirmModal from "../Common/Components/Modal/ConfirmModal";

const BorrowingBookManagement = () => {
    const [borrowBooks, setBorrowBooks] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const [perPage] = useState(10);
    const [isShowConfirmModal, setIsShowConfirmModal] = useState(false);
    const [selectedToReturn, setSelectedToReturn] = useState({});

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
        {
            title: "",
            dataIndex: "edit",
        },
    ];

    const handleReturnBook = (item) => {
        setIsShowConfirmModal(true);
        setSelectedToReturn(item);
    };
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
                    edit: (
                        <div
                            className="text-blue-500 cursor-pointer font-semibold"
                            onClick={() => handleReturnBook(item)}
                            role="button"
                            tabIndex={0}
                        >
                            Return
                        </div>
                    ),
                });
            });
            setBorrowBooks(standardizedData);
            setTotalPages(responseTotalPages);
        });
    }, [currentPage, perPage]);

    const handleConfirmDelete = (onSuccess, onError) => {
        borrowBookAPI
            .returnBorrowBook(selectedToReturn)
            .then(() => {
                getBorrowingBookList();
                setIsShowConfirmModal(false);
                onSuccess();
            })
            .catch((error) => {
                onError(error?.response?.message || "Something went wrong! Please try again later.");
            });
    };

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
            <DeleteConfirmModal
                title={`Trả sách "${selectedToReturn.title}"?`}
                data={selectedToReturn}
                description="Bạn có chắc muốn trả sách này không? Thao tác này không thể hoàn tác."
                open={isShowConfirmModal}
                onConfirm={handleConfirmDelete}
                onClose={setIsShowConfirmModal}
            />
        </>
    );
};

export default BorrowingBookManagement;
