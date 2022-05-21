import { useEffect, useState } from "react";
import Table from "../Common/Components/Table/Table";
import { setDocumentTitle } from "../Common/Utils/helper";
import { reservationAPI } from "../../apis";
import TableRowActions from "./Components/TableRowActions";
import ModifyModal from "./Components/ModifyModal";

const ReservationManagement = () => {
    const [reservations, setReservations] = useState([]);
    const [isShownModifyModal, setIsShownModifyModal] = useState(false);
    const [selectedToModify, setSelectedToModify] = useState({});

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
        if (action === "edit") {
            setIsShownModifyModal(true);
            setSelectedToModify(reservation);
        } else if (action === "delete") {
            // Handle Delete
        }
    };

    useEffect(() => {
        setDocumentTitle("Book Management");
    }, []);

    useEffect(() => {
        reservationAPI.getAllReserving().then((data) => {
            const standardizedData = [];
            data.content.forEach((item) => {
                standardizedData.push({
                    id: item.id,
                    username: item.username,
                    book: item.book,
                    reservationDate: item.reservationDate,
                    expirationDate: item.expirationDate,
                    status: item.status,
                    edit: (
                        <TableRowActions
                            id={item}
                            onClick={handleClickEditButton}
                        />
                    ),
                });
            });
            setReservations(standardizedData);
        });
    }, []);

    return (
        <>
            <div>Reserving Management</div>
            <Table
                columns={columns}
                dataSource={reservations}
                className="mt-6"
            />
            <ModifyModal
                open={isShownModifyModal}
                book={selectedToModify}
                onClose={setIsShownModifyModal}
            />
        </>
    );
};

export default ReservationManagement;
