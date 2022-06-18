import { useCallback, useEffect, useState } from "react";
import { bookAPI } from "../../services";
import Button from "../Common/Components/Button/Button";
import DeleteConfirmModal from "../Common/Components/Modal/ConfirmModal";
import Table from "../Common/Components/Table/Table";
import { setDocumentTitle } from "../Common/Utils/helpers";
import ModifyModal from "./Components/ModifyModal";
import TableRowActions from "./Components/TableRowActions";

const BookManagement = () => {
    const [books, setBooks] = useState([]);
    const [isShownModifyModal, setIsShownModifyModal] = useState(false);
    const [isShowConfirmModal, setIsShowConfirmModal] = useState(false);
    const [isShowConfirmAddAvailableModal, setIsShowConfirmAddModal] = useState(false);
    const [selectedToModify, setSelectedToModify] = useState({});
    const [selectedToDelete, setSelectedToDelete] = useState({});
    const [selectedToAddAvailable, setSelectedToAddAvailable] = useState({});
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const [perPage] = useState(10);

    const columns = [
        {
            title: "ID",
            dataIndex: "id",
        },
        {
            title: "ISBN",
            dataIndex: "isbn",
        },
        {
            title: "Ảnh",
            dataIndex: "image",
        },
        {
            title: "Title",
            dataIndex: "title",
        },
        {
            title: "Authors",
            dataIndex: "authors",
        },
        {
            title: "Publisher",
            dataIndex: "publisher",
        },
        {
            title: "Category",
            dataIndex: "category",
        },
        {
            title: "Price",
            dataIndex: "price",
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

    const handleClickEditButton = (action, book) => {
        if (!book) return;
        if (action === "edit") {
            setIsShownModifyModal(true);
            setSelectedToModify(book);
        } else if (action === "delete") {
            setIsShowConfirmModal(true);
            setSelectedToDelete(book);
        } else if (action === "addavailable") {
            setIsShowConfirmAddModal(true);
            setSelectedToAddAvailable(book);
        }
    };

    const getBookList = useCallback(() => {
        bookAPI.getBooks(currentPage, perPage).then(({ content, totalPages: responseTotalPages }) => {
            const standardizedData = [];
            content.forEach((item) => {
                standardizedData.push({
                    id: item.id,
                    isbn: item.isbn,
                    image: (
                        <img src={`${process.env.REACT_APP_API_URL}/api/books/image/${item.isbn}`} alt={item.isbn} />
                    ),
                    title: item.title,
                    authors: item.authors.join(", "),
                    publisher: item.publisher,
                    category: item.category,
                    price: item.price,
                    status: item?.status || "Available",
                    edit: <TableRowActions id={item} onClick={handleClickEditButton} />,
                });
            });
            setBooks(standardizedData);
            setTotalPages(responseTotalPages);
        });
    }, [currentPage, perPage]);

    const handleSubmitModifyForm = (action, data, onSuccess) => {
        if (action === "edit") {
            bookAPI.updateBook(data).then(() => {
                getBookList();
                setIsShownModifyModal(false);
                onSuccess();
            });
            if (data.image[0]) {
                bookAPI.updateImage(data.isbn, data.image[0]);
            }
        } else if (action === "create") {
            bookAPI.createBook(data).then(() => {
                onSuccess();
                setIsShownModifyModal(false);
                if (data.image[0]) {
                    bookAPI.updateImage(data.isbn, data.image[0]).then(getBookList());
                }
                getBookList();
            });
        }
    };

    const handleClickAddButton = () => {
        setSelectedToModify(null);
        setIsShownModifyModal(true);
    };

    const handleConfirmDelete = (onSuccess, onError) => {
        bookAPI
            .deleteBookById(selectedToDelete.id)
            .then(() => {
                getBookList();
                setIsShowConfirmModal(false);
                onSuccess();
            })
            .catch((error) => {
                onError(error?.response?.data || "Something went wrong! Please try again later.");
            });
    };

    const handleConfirmAddAvailable = (onSuccess, onError) => {
        bookAPI
            .createAvailableBook(selectedToAddAvailable)
            .then(() => {
                getBookList();
                setIsShowConfirmAddModal(false);
                onSuccess();
            })
            .catch((error) => {
                onError(error?.response?.data || "Something went wrong! Please try again later.");
            });
    };

    useEffect(() => {
        setDocumentTitle("Book Management");
    }, []);

    useEffect(() => {
        getBookList();
    }, [currentPage]);

    return (
        <>
            <div className="flex items-center justify-between">
                <div>Book Management</div>
                <Button onClick={handleClickAddButton}>Thêm sách mới</Button>
            </div>
            <Table
                columns={columns}
                dataSource={books}
                className="mt-6"
                pagination={{
                    currentPage,
                    totalPages,
                    onChangePage: (page) => setCurrentPage(page),
                }}
            />
            <ModifyModal
                open={isShownModifyModal}
                book={selectedToModify}
                onClose={setIsShownModifyModal}
                onSubmit={handleSubmitModifyForm}
            />
            <DeleteConfirmModal
                title={`Xoá "${selectedToDelete.title}"?`}
                data={selectedToDelete}
                description="Bạn có chắc muốn xoá sách này không? Thao tác này không thể hoàn tác."
                open={isShowConfirmModal}
                onConfirm={handleConfirmDelete}
                onClose={setIsShowConfirmModal}
            />
            <DeleteConfirmModal
                title={`Thêm "${selectedToAddAvailable.title}"?`}
                data={selectedToAddAvailable}
                description="Bạn có chắc muốn thêm sách này không? Thao tác này không thể hoàn tác."
                open={isShowConfirmAddAvailableModal}
                onConfirm={handleConfirmAddAvailable}
                onClose={setIsShowConfirmAddModal}
            />
        </>
    );
};

export default BookManagement;
