import { useCallback, useEffect, useState } from "react";
import { reservationAPI } from "../../services";
import Table from "../Common/Components/Table/Table";
import { setDocumentTitle } from "../Common/Utils/helpers";
import TableRowActions from "./Components/TableRowActions";

const ReservationManagement = () => {
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
        if (action === "renewal") {
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
                    edit: <TableRowActions id={item} onClick={handleClickEditButton} />,
                });
            });
            setReservations(standardizedData);
            setTotalPages(responseTotalPages);
        });
    }, [currentPage, perPage]);

    useEffect(() => {
        setDocumentTitle("Book Management");
    }, []);

    useEffect(() => {
        getReservingList();
    }, []);

    return (
        <>
            <div>Reserving Management</div>
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
        </>
    );
};

export default ReservationManagement;
