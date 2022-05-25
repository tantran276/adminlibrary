import { useCallback, useEffect, useState } from "react";
import { reservationAPI } from "../../services";
import Table from "../Common/Components/Table/Table";
import { setDocumentTitle } from "../Common/Utils/helpers";
import BorrowModal from "./Components/BorrowModal";
import Button from "../Common/Components/Button/Button";
import ReservingRowActions from "./Components/ReservingRowActions";

const ReservationManagement = () => {
    const [errorMessage, setErrorMessage] = useState("");
    const [isShownBorrowModal, setIsShownBorrowModal] = useState(false);
    const [reservations, setReservations] = useState([]);
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
            title: "Book",
            dataIndex: "book",
        },
        {
            title: "Reservation Date",
            dataIndex: "reservationDate",
        },
        {
            title: "Expiration Date",
            dataIndex: "expirationDate",
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

    const handleClickEditButton = (action, reservation) => {
        if (!reservation) return;
        if (action === "accept") {
            reservationAPI.acceptReservation(reservation).then(() => {});
        } else if (action === "renewal") {
            reservationAPI.renewalReservation(reservation).then(() => {});
        } else if (action === "cancel") {
            reservationAPI.cancelReservation(reservation).then(() => {});
        }
    };

    const getReservingList = useCallback(() => {
        reservationAPI.getAllReserving(currentPage, perPage).then(({ content, totalPages: responseTotalPages }) => {
            const standardizedData = [];
            content.forEach((item) => {
                standardizedData.push({
                    id: item.id,
                    username: item.username,
                    book: item.book,
                    reservationDate: item.reservationDate,
                    expirationDate: item.expirationDate,
                    status: item.status,
                    edit: <ReservingRowActions id={item} onClick={handleClickEditButton} />,
                });
            });
            setReservations(standardizedData);
            setTotalPages(responseTotalPages);
        });
    }, [currentPage, perPage]);

    const handleClickAddButton = () => {
        setErrorMessage("");
        setIsShownBorrowModal(true);
    };

    const handleSubmitBorrowForm = (data, onSuccess) => {
        setErrorMessage("");
        reservationAPI
            .borrowBook(data)
            .then(() => {
                setIsShownBorrowModal(false);
                onSuccess();
                getReservingList();
            })
            .catch((error) => {
                setErrorMessage(error.response.data);
            });
    };

    useEffect(() => {
        setDocumentTitle("Book Management");
    }, []);

    useEffect(() => {
        getReservingList();
    }, []);

    return (
        <>
            <div className="flex items-center justify-between">
                Reserving Management
                <Button onClick={handleClickAddButton}>Muon sach</Button>
            </div>
            <Table
                columns={columns}
                dataSource={reservations}
                className="mt-6"
                pagination={{
                    currentPage,
                    totalPages,
                    onChangePage: (page) => setCurrentPage(page),
                }}
            />
            <BorrowModal
                errorMessage={errorMessage}
                open={isShownBorrowModal}
                onClose={setIsShownBorrowModal}
                onSubmit={handleSubmitBorrowForm}
            />
        </>
    );
};

export default ReservationManagement;
