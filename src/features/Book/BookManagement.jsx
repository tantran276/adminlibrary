import { useCallback, useEffect, useState } from "react";
import { bookAPI } from "../../apis";
import Table from "../Common/Components/Table/Table";
import { setDocumentTitle } from "../Common/Utils/helper";
import ModifyModal from "./Components/ModifyModal";
import TableRowActions from "./Components/TableRowActions";

const BookManagement = () => {
    const [books, setBooks] = useState([]);
    const [isShownModifyModal, setIsShownModifyModal] = useState(false);
    const [selectedToModify, setSelectedToModify] = useState({});
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
            // Handle Delete
        }
    };

    const getBookList = useCallback(() => {
        bookAPI
            .getBooks(currentPage, perPage)
            .then(({ content, totalPages: responseTotalPages }) => {
                const standardizedData = [];
                content.forEach((item) => {
                    standardizedData.push({
                        id: item.id,
                        isbn: item.isbn,
                        title: item.title,
                        authors: item.authors.join(", "),
                        publisher: item.publisher,
                        category: item.category,
                        price: item.price,
                        status: item?.status || "Available",
                        edit: (
                            <TableRowActions
                                id={item}
                                onClick={handleClickEditButton}
                            />
                        ),
                    });
                });
                setBooks(standardizedData);
                setTotalPages(responseTotalPages);
            });
    }, [currentPage, perPage]);

    useEffect(() => {
        setDocumentTitle("Book Management");
    }, []);

    useEffect(() => {
        getBookList();
    }, []);

    useEffect(() => {
        getBookList();
    }, [currentPage]);

    return (
        <>
            <div>Book Management</div>
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
            />
        </>
    );
};

export default BookManagement;
