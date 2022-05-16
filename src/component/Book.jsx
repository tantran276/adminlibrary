// import React from "react";
// import {
//     Button,
//     FormGroup,
//     Input,
//     Label,
//     Modal,
//     ModalBody,
//     ModalFooter,
//     ModalHeader,
//     Table,
// } from "reactstrap";

// class Book extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             books: [],
//             newBookModal: false,
//             editBookModal: false,
//             editBook: {},
//             newBookData: {},
//         };
//     }

//     componentDidMount() {
//         this.getBooks();
//     }

//     getBooks = () => {
//         const axios = require("axios");
//         const config = {
//             method: "get",
//             url: "http://localhost:8080/api/books",
//             headers: {},
//         };

//         axios(config)
//             .then((response) => {
//                 this.setState({ books: response.data });
//             })
//             .catch(function (error) {
//                 console.log(error);
//             });
//     };

//     toogleNewBookModal() {
//         this.setState({ newBookModal: !this.state.newBookModal });
//     }

//     toogleEditBookModal() {
//         this.setState({ editBookModal: !this.state.editBookModal });
//     }

//     addBook() {
//         this.postBook();
//     }

//     postBook() {
//         const { newBookData } = this.state;
//         this.setState({ newBookData });
//         const axios = require("axios");
//         const data = JSON.stringify({
//             isbn: this.state.newBookData.isbn,
//             title: this.state.newBookData.title,
//             tag: this.state.newBookData.tag,
//             tag1: this.state.newBookData.tag1,
//             tag2: this.state.newBookData.tag2,
//             author: this.state.newBookData.author,
//             author1: this.state.newBookData.author1,
//             publisher: this.state.newBookData.publisher,
//             category: this.state.newBookData.category,
//             content: this.state.newBookData.content,
//             price: this.state.newBookData.price,
//             createDate: this.state.newBookData.createDate,
//         });

//         const config = {
//             method: "post",
//             url: "http://localhost:8080/api/books",
//             headers: {
//                 "Content-Type": "application/json",
//             },
//             data,
//         };

//         axios(config)
//             .then(function (response) {
//                 console.log(JSON.stringify(response.data));
//             })
//             .catch(function (error) {
//                 console.log(error);
//             });
//         this.setState({ newBookModal: false });
//     }

//     postImage() {}

//     selectedImage = async (e) => {
//         this.state.newBookData.image = e.target.files[0];
//     };

//     suaSach(book) {
//         this.setState({ editBook: book });
//         this.setState({ editBookModal: true });
//     }

//     editBook() {
//         const { editBook } = this.state;
//         this.setState({ editBook });
//         const axios = require("axios");
//         const data = JSON.stringify({
//             isbn: this.state.editBook.isbn,
//             title: this.state.editBook.title,
//             tag: this.state.editBook.tag,
//             tag1: this.state.editBook.tag1,
//             tag2: this.state.editBook.tag2,
//             author: this.state.editBook.author,
//             author1: this.state.editBook.author1,
//             publisher: this.state.editBook.publisher,
//             category: this.state.editBook.category,
//             content: this.state.editBook.content,
//             price: this.state.editBook.price,
//             createDate: this.state.newBookData.createDate,
//         });

//         const config = {
//             method: "put",
//             url: "http://localhost:8080/api/books",
//             headers: {
//                 "Content-Type": "application/json",
//             },
//             data,
//         };

//         axios(config)
//             .then(function (response) {
//                 console.log(JSON.stringify(response.data));
//             })
//             .catch(function (error) {
//                 console.log(error);
//             });
//         this.setState({ editBookModal: false });
//     }

//     deleteBook(id) {
//         const axios = require("axios");

//         const config = {
//             method: "delete",
//             url: `http://localhost:8080/api/books/${id}`,
//             headers: {},
//         };

//         axios(config)
//             .then(function (response) {
//                 console.log(JSON.stringify(response.data));
//             })
//             .catch(function (error) {
//                 console.log(error);
//             });
//     }

//     render() {
//         const books = this.state.books.map((book) => {
//             return (
//                 <tr key={book.id}>
//                     <td>{book.id}</td>
//                     <td>{book.isbn}</td>
//                     <td>{book.title}</td>
//                     <td>{book.tag}</td>
//                     <td>{book.tag1}</td>
//                     <td>{book.tag2}</td>
//                     <td>{book.author}</td>
//                     <td>{book.author1}</td>
//                     <td>{book.publisher}</td>
//                     <td>{book.category}</td>
//                     <td>{book.price}</td>
//                     <td>{book.createDate}</td>
//                     <td>
//                         <Button
//                             color="success"
//                             size="sm"
//                             className="mr-2"
//                             onClick={() => this.suaSach(book)}
//                         >
//                             Edit
//                         </Button>
//                         <Button
//                             color="danger"
//                             size="sm"
//                             onClick={() => this.deleteBook(book.id)}
//                         >
//                             Delete
//                         </Button>
//                     </td>
//                 </tr>
//             );
//         });
//         return (
//             <div>
//                 <Button
//                     color="primary"
//                     onClick={this.toogleNewBookModal.bind(this)}
//                 >
//                     Add Book
//                 </Button>
//                 <Modal
//                     isOpen={this.state.newBookModal}
//                     toggle={this.toogleNewBookModal.bind(this)}
//                 >
//                     <ModalHeader toggle={this.toogleNewBookModal.bind(this)}>
//                         Add a new book
//                     </ModalHeader>
//                     <ModalBody>
//                         <FormGroup>
//                             <Label for="isbn">Isbn</Label>
//                             <Input
//                                 id="isbn"
//                                 value={this.state.newBookData.isbn}
//                                 onChange={(e) => {
//                                     const { newBookData } = this.state;
//                                     newBookData.isbn = e.target.value;
//                                     this.setState({ newBookData });
//                                 }}
//                             />
//                         </FormGroup>
//                         <FormGroup>
//                             <Label for="title">Title</Label>
//                             <Input
//                                 id="title"
//                                 value={this.state.newBookData.title}
//                                 onChange={(e) => {
//                                     const { newBookData } = this.state;
//                                     newBookData.title = e.target.value;
//                                     this.setState({ newBookData });
//                                 }}
//                             />
//                         </FormGroup>

//                         <FormGroup>
//                             <Label for="authors">Tác giả</Label>
//                             <Input
//                                 id="authors"
//                                 value={this.state.newBookData.author}
//                                 onChange={(e) => {
//                                     const { newBookData } = this.state;
//                                     newBookData.author = e.target.value;
//                                     this.setState({ newBookData });
//                                 }}
//                             />
//                         </FormGroup>
//                         <FormGroup>
//                             <Label for="authors1">Tác giả 1</Label>
//                             <Input
//                                 id="authors1"
//                                 value={this.state.newBookData.author1}
//                                 onChange={(e) => {
//                                     const { newBookData } = this.state;
//                                     newBookData.author1 = e.target.value;
//                                     this.setState({ newBookData });
//                                 }}
//                             />
//                         </FormGroup>
//                         <FormGroup>
//                             <Label for="publisher">Nhà xuất bản</Label>
//                             <Input
//                                 id="title"
//                                 value={this.state.newBookData.publisher}
//                                 onChange={(e) => {
//                                     const { newBookData } = this.state;
//                                     newBookData.publisher = e.target.value;
//                                     this.setState({ newBookData });
//                                 }}
//                             />
//                         </FormGroup>
//                         <FormGroup>
//                             <Label for="category">Thể loại</Label>
//                             <Input
//                                 id="category"
//                                 value={this.state.newBookData.category}
//                                 type="select"
//                                 onChange={(e) => {
//                                     const { newBookData } = this.state;
//                                     newBookData.category = e.target.value;
//                                     this.setState({ newBookData });
//                                 }}
//                             >
//                                 <option> </option>
//                                 <option>
//                                     Tin học, thông tin & tác phẩm tổng quát
//                                 </option>
//                                 <option>2</option>
//                                 <option>3</option>
//                             </Input>
//                         </FormGroup>
//                         <FormGroup>
//                             <Label for="content">Nội dung</Label>
//                             <Input
//                                 id="content"
//                                 value={this.state.newBookData.content}
//                                 onChange={(e) => {
//                                     const { newBookData } = this.state;
//                                     newBookData.content = e.target.value;
//                                     this.setState({ newBookData });
//                                 }}
//                             />
//                         </FormGroup>
//                         <FormGroup>
//                             <Label for="price">Giá</Label>
//                             <Input
//                                 id="content"
//                                 value={this.state.newBookData.price}
//                                 onChange={(e) => {
//                                     const { newBookData } = this.state;
//                                     newBookData.price = e.target.value;
//                                     this.setState({ newBookData });
//                                 }}
//                             />
//                         </FormGroup>
//                         <FormGroup>
//                             <Label for="createDate">Ngày xuất bản</Label>
//                             <Input
//                                 id="createDate"
//                                 type="date"
//                                 value={this.state.newBookData.createDate}
//                                 onChange={(e) => {
//                                     const { newBookData } = this.state;
//                                     newBookData.createDate = e.target.value;
//                                     this.setState({ newBookData });
//                                     console.log(
//                                         this.state.newBookData.createDate
//                                     );
//                                 }}
//                             />
//                         </FormGroup>
//                         <FormGroup>
//                             <Label for="image">Bìa sách</Label>
//                             <Input
//                                 id="image"
//                                 type="file"
//                                 value={this.state.newBookData.image}
//                                 onChange={this.selectedImage}
//                             />
//                         </FormGroup>
//                     </ModalBody>
//                     <ModalFooter>
//                         <Button
//                             color="primary"
//                             onClick={this.addBook.bind(this)}
//                         >
//                             {" "}
//                             Them sach
//                         </Button>{" "}
//                         <Button
//                             color="secondary"
//                             onClick={this.toogleNewBookModal.bind(this)}
//                         >
//                             Cancel
//                         </Button>
//                     </ModalFooter>
//                 </Modal>
//                 {/* -------------------------------------------------- sua sach ----------------------------------------*/}
//                 <Modal
//                     isOpen={this.state.editBookModal}
//                     toggle={this.toogleEditBookModal.bind(this)}
//                 >
//                     <ModalHeader toggle={this.toogleEditBookModal.bind(this)}>
//                         Edit book
//                     </ModalHeader>
//                     <ModalBody>
//                         <FormGroup>
//                             <Label for="isbn">Isbn</Label>
//                             <Input
//                                 id="isbn"
//                                 value={this.state.editBook.isbn}
//                                 onChange={(e) => {
//                                     const { editBook } = this.state;
//                                     editBook.isbn = e.target.value;
//                                     this.setState({ editBook });
//                                 }}
//                             />
//                         </FormGroup>
//                         <FormGroup>
//                             <Label for="title">Title</Label>
//                             <Input
//                                 id="title"
//                                 value={this.state.editBook.title}
//                                 onChange={(e) => {
//                                     const { editBook } = this.state;
//                                     editBook.title = e.target.value;
//                                     this.setState({ editBook });
//                                 }}
//                             />
//                         </FormGroup>
//                         <FormGroup>
//                             <Label for="tag">Tag</Label>
//                             <Input
//                                 id="tag"
//                                 value={this.state.editBook.tag}
//                                 onChange={(e) => {
//                                     const { editBook } = this.state;
//                                     editBook.tag = e.target.value;
//                                     this.setState({ editBook });
//                                 }}
//                             />
//                         </FormGroup>
//                         <FormGroup>
//                             <Label for="tag1">Tag1</Label>
//                             <Input
//                                 id="tag1"
//                                 value={this.state.editBook.tag1}
//                                 onChange={(e) => {
//                                     const { editBook } = this.state;
//                                     editBook.tag1 = e.target.value;
//                                     this.setState({ editBook });
//                                 }}
//                             />
//                         </FormGroup>
//                         <FormGroup>
//                             <Label for="tag2">Tag3</Label>
//                             <Input
//                                 id="tag2"
//                                 value={this.state.editBook.tag2}
//                                 onChange={(e) => {
//                                     const { editBook } = this.state;
//                                     editBook.tag2 = e.target.value;
//                                     this.setState({ editBook });
//                                 }}
//                             />
//                         </FormGroup>
//                         <FormGroup>
//                             <Label for="authors">Tác giả</Label>
//                             <Input
//                                 id="authors"
//                                 value={this.state.editBook.author}
//                                 onChange={(e) => {
//                                     const { editBook } = this.state;
//                                     editBook.author = e.target.value;
//                                     this.setState({ editBook });
//                                 }}
//                             />
//                         </FormGroup>
//                         <FormGroup>
//                             <Label for="authors1">Tác giả 1</Label>
//                             <Input
//                                 id="authors1"
//                                 value={this.state.editBook.author1}
//                                 onChange={(e) => {
//                                     const { editBook } = this.state;
//                                     editBook.author1 = e.target.value;
//                                     this.setState({ editBook });
//                                 }}
//                             />
//                         </FormGroup>
//                         <FormGroup>
//                             <Label for="publisher">Nhà xuất bản</Label>
//                             <Input
//                                 id="title"
//                                 value={this.state.editBook.publisher}
//                                 onChange={(e) => {
//                                     const { editBook } = this.state;
//                                     editBook.publisher = e.target.value;
//                                     this.setState({ editBook });
//                                 }}
//                             />
//                         </FormGroup>
//                         <FormGroup>
//                             <Label for="category">Thể loại</Label>
//                             <Input
//                                 id="category"
//                                 value={this.state.editBook.category}
//                                 type="select"
//                                 onChange={(e) => {
//                                     const { editBook } = this.state;
//                                     editBook.category = e.target.value;
//                                     this.setState({ editBook });
//                                 }}
//                             >
//                                 <option> </option>
//                                 <option>
//                                     Tin học, thông tin & tác phẩm tổng quát
//                                 </option>
//                                 <option>2</option>
//                                 <option>3</option>
//                             </Input>
//                         </FormGroup>
//                         <FormGroup>
//                             <Label for="content">Nội dung</Label>
//                             <Input
//                                 id="content"
//                                 value={this.state.editBook.content}
//                                 onChange={(e) => {
//                                     const { editBook } = this.state;
//                                     editBook.content = e.target.value;
//                                     this.setState({ editBook });
//                                 }}
//                             />
//                         </FormGroup>
//                         <FormGroup>
//                             <Label for="price">Giá</Label>
//                             <Input
//                                 id="content"
//                                 value={this.state.editBook.price}
//                                 onChange={(e) => {
//                                     const { editBook } = this.state;
//                                     editBook.price = e.target.value;
//                                     this.setState({ editBook });
//                                 }}
//                             />
//                         </FormGroup>
//                         <FormGroup>
//                             <Label for="createDate">Ngày xuất bản</Label>
//                             <Input
//                                 id="createDate"
//                                 type="date"
//                                 value={this.state.editBook.createDate}
//                                 onChange={(e) => {
//                                     const { editBook } = this.state;
//                                     editBook.createDate = e.target.value;
//                                     this.setState({ editBook });
//                                     console.log(this.state.editBook.createDate);
//                                 }}
//                             />
//                         </FormGroup>
//                         <FormGroup>
//                             <Label for="image">Bìa sách</Label>
//                             <Input
//                                 id="image"
//                                 type="file"
//                                 value={this.state.editBook.image}
//                                 onChange={this.selectedImage}
//                             />
//                         </FormGroup>
//                     </ModalBody>
//                     <ModalFooter>
//                         <Button
//                             color="primary"
//                             onClick={this.editBook.bind(this)}
//                         >
//                             {" "}
//                             Luu
//                         </Button>{" "}
//                         <Button
//                             color="secondary"
//                             onClick={this.toogleEditBookModal.bind(this)}
//                         >
//                             Cancel
//                         </Button>
//                     </ModalFooter>
//                 </Modal>
//                 <Table>
//                     <thead>
//                         <tr>
//                             <th>#</th>
//                             <th>Isbn</th>
//                             <th>Title</th>
//                             <th>Tag</th>
//                             <th>Tag1</th>
//                             <th>Tag2</th>
//                             <th>Author</th>
//                             <th>Author1</th>
//                             <th>Publisher</th>
//                             <th>Category</th>
//                             <th>Price</th>
//                             <th>Create Date</th>
//                             <th>Actions</th>
//                         </tr>
//                     </thead>
//                     <tbody>{books}</tbody>
//                 </Table>
//             </div>
//         );
//     }
// }
// export default Book;
