import { useEffect, useState } from "react";
import { bookAPI } from "../../apis";
import Table from "../Common/Components/Table/Table";
import { setDocumentTitle } from "../Common/Utils/helper";
import ModifyModal from "./Components/ModifyModal";
import TableRowActions from "./Components/TableRowActions";

const CopyManagement = () => {
    const [books, setBooks] = useState([]);
    const [isShownModifyModal, setIsShownModifyModal] = useState(false);
    const [selectedToModify, setSelectedToModify] = useState({});

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

    useEffect(() => {
        bookAPI.getBooks().then((data) => {
            const standardizedData = [];
            data.forEach((item) => {
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
        });
    }, []);

    useEffect(() => {
        setDocumentTitle("Copy Management");
    }, []);

    return (
        <>
            <div>Copy Management</div>
            <Table columns={columns} dataSource={books} className="mt-6" />
            <ModifyModal
                open={isShownModifyModal}
                book={selectedToModify}
                onClose={setIsShownModifyModal}
            />
        </>
    );
};

export default CopyManagement;
