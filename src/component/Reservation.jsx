import React from "react";
import {
  FormGroup,
  Label,
  Input,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Table,
  Button,
} from "reactstrap";

class Reservation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      reservations: [],
    };
  }

  componentDidMount() {
    this.getReservations();
  }

  getReservations = () => {
    var axios = require("axios");
    var config = {
      method: "get",
      url: "http://localhost:8080/api/reservation",
      headers: {},
    };

    axios(config)
      .then((response) => {
        this.setState({ reservations: response.data });
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  render() {
    const reservations = this.state.reservations.map((reservation) => {
            return (
                <tr key={reservation.id}>
                    <td>{reservation.id}</td>
                    <td>{reservation.username}</td>
                    <td>{reservation.book}</td>
                    <td>{reservation.reservationDate}</td>
                    <td>{reservation.expirationDate}</td>
                    <td>{reservation.status}</td>
                    <td>
                        <Button color="success" size="sm" className="mr-2" onClick={() => this.suaSach()}>Gia han</Button>
                        <Button color="danger" size="sm" onClick={() => this.deleteBook(reservation.id)}>Cho muon</Button>
                    </td>
                </tr>
            )
        })

    });

    return (
      <div>
        <Table>
          <thead>
            <tr>
              <th>#</th>
              <th>Username</th>
              <th>Book</th>
              <th>Reservation Date</th>
              <th>Expiration Date</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>{reservations}</tbody>
        </Table>
      </div>
    );
  }
}
export default Reservation;
