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

class User extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      editUserModal: false,
      editUser: {},
    };
  }

  componentDidMount() {
    this.getUsers();
  }

  getUsers = () => {
    var axios = require("axios");
    let config = {
      method: "get",
      url: "http://localhost:8080/api/users",
      headers: {},
    };

    axios(config)
      .then((response) => {
        this.setState({ users: response.data });
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  toogleEditUserModal() {
    this.setState({ editUserModal: !this.state.editUserModal });
  }

  suaUser(user) {
    this.setState({ editUser: user });
    this.setState({ editUserModal: true });
  }

  editUser() {
    var axios = require("axios");
    var data = JSON.stringify({
      id: this.state.editUser.id,
      username: this.state.editUser.username,
      email: this.state.editUser.email,
      password: this.state.editUser.password,
      firstName: this.state.editUser.firstName,
      lastName: this.state.editUser.lastName,
      dateOfBirth: this.state.editUser.dateOfBirth,
      role: this.state.editUser.role,
      role1: this.state.editUser.role1,
    });

    let config = {
      method: "put",
      url: "http://localhost:8080/api/users",
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
    };

    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
      })
      .catch(function (error) {
        console.log(error);
      });
    this.setState({ editUserModal: false });
  }

  deleteUser(id) {
    var axios = require("axios");

    var config = {
      method: "delete",
      url: "http://localhost:8080/api/users/" + id,
      headers: {},
    };

    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  render() {
    const users = this.state.users.map((user) => {
            return (
                <tr key={user.id}>
                    <td>{user.id}</td>
                    <td>{user.username}</td>
                    <td>{user.email}</td>
                    <td>{user.firstName}</td>
                    <td>{user.lastName}</td>
                    <td>{user.dateOfBirth}</td>
                    <td>{user.createDate}</td>
                    <td>{user.role}</td>
                    <td>{user.role1}</td>
                    <td>
                        <Button color="success" size="sm" className="mr-2" onClick={() => this.suaUser(user)}>Edit</Button>
                        <Button color="danger" size="sm" onClick={() => this.deleteUser(user.id)}>Delete</Button>
                    </td>
                </tr>
            )
        })
    });
    return (
      <div>
        <Modal
          isOpen={this.state.editUserModal}
          toggle={this.toogleEditUserModal.bind(this)}
        >
          <ModalHeader toggle={this.toogleEditUserModal.bind(this)}>
            Edit User
          </ModalHeader>
          <ModalBody>
            <FormGroup>
              <Label for="id">Id</Label>
              <Input id="id" value={this.state.editUser.id} readOnly />
            </FormGroup>
            <FormGroup>
              <Label for="username">Isbn</Label>
              <Input
                id="username"
                value={this.state.editUser.username}
                onChange={(e) => {
                  let { editUser } = this.state;
                  editUser.username = e.target.value;
                  this.setState({ editUser });
                }}
              />
            </FormGroup>
            <FormGroup>
              <Label for="email">Email</Label>
              <Input
                id="email"
                value={this.state.editUser.email}
                onChange={(e) => {
                  let { editUser } = this.state;
                  editUser.email = e.target.value;
                  this.setState({ editUser });
                }}
              />
            </FormGroup>
            <FormGroup>
              <Label for="password">Password</Label>
              <Input
                id="password"
                type="password"
                onChange={(e) => {
                  let { editUser } = this.state;
                  editUser.password = e.target.value;
                  this.setState({ editUser });
                }}
              />
            </FormGroup>
            <FormGroup>
              <Label for="firstName">First Name</Label>
              <Input
                id="firstName"
                value={this.state.editUser.firstName}
                onChange={(e) => {
                  let { editUser } = this.state;
                  editUser.firstName = e.target.value;
                  this.setState({ editUser });
                }}
              />
            </FormGroup>
            <FormGroup>
              <Label for="lastName">Last Name</Label>
              <Input
                id="lastName"
                value={this.state.editUser.lastName}
                onChange={(e) => {
                  let { editUser } = this.state;
                  editUser.lastName = e.target.value;
                  this.setState({ editUser });
                }}
              />
            </FormGroup>
            <FormGroup>
              <Label for="dateOfBirth">Date Of Birth</Label>
              <Input
                id="dateOfBirth"
                value={this.state.editUser.dateOfBirth}
                type="date"
                onChange={(e) => {
                  let { editUser } = this.state;
                  editUser.dateOfBirth = e.target.value;
                  this.setState({ editUser });
                }}
              />
            </FormGroup>
            <FormGroup>
              <Label for="role">Role</Label>
              <Input
                id="role"
                value={this.state.editUser.role}
                onChange={(e) => {
                  let { editUser } = this.state;
                  editUser.role = e.target.value;
                  this.setState({ editUser });
                }}
              />
            </FormGroup>
            <FormGroup>
              <Label for="role1">Role1</Label>
              <Input
                id="role1"
                value={this.state.editUser.role1}
                onChange={(e) => {
                  let { editUser } = this.state;
                  editUser.role1 = e.target.value;
                  this.setState({ editUser });
                }}
              />
            </FormGroup>
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.editUser.bind(this)}>
              {" "}
              Luu
            </Button>{" "}
            <Button
              color="secondary"
              onClick={this.toogleEditUserModal.bind(this)}
            >
              Cancel
            </Button>
          </ModalFooter>
        </Modal>
        <Table>
          <thead>
            <tr>
              <th>#</th>
              <th>Username</th>
              <th>Email</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Date Of Birth</th>
              <th>Create Date</th>
              <th>Role</th>
              <th>Role1</th>
            </tr>
          </thead>
          <tbody>{users}</tbody>
        </Table>
      </div>
    );
  }
}
export default User;
