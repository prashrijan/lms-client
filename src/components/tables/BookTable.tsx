import { Button, Table } from "react-bootstrap";

import { Books } from "../../types/types";
import Input from "../input/Input";
import { useDispatch, useSelector } from "react-redux";
import { getBooksAdminAction } from "../../features/books/bookAction";
import { RootState } from "../../redux/store/store";
import { useEffect } from "react";
import { Link } from "react-router-dom";

function BookTable() {
    const dispatch = useDispatch<any>();

    const booksObj = useSelector((state: RootState) => state.booksInfo);

    const books: Books[] = booksObj.books;

    useEffect(() => {
        dispatch(getBooksAdminAction());
    }, []);

    return (
        <>
            <div className="d-flex justify-content-between">
                <div>
                    {books.length ? (
                        `${books.length} ${
                            books.length == 1 ? "Book" : "Books"
                        } found!`
                    ) : (
                        <p className="text-danger">No books found!</p>
                    )}
                </div>
                <Input
                    type="text"
                    placeholder={
                        books.length ? "Search books" : "No books to search"
                    }
                    readOnly={!books.length}
                />
            </div>

            {books.length != 0 ? (
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>S.No.</th>
                            <th>Thumbnail</th>
                            <th>Book Name</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {books.map((book, index) => (
                            <tr key={book._id}>
                                <td>{index + 1}</td>
                                <td>
                                    <img
                                        src="/openheimer.jpg"
                                        alt={`${book.title}-thumbnail`}
                                        height={"100px"}
                                    />
                                </td>
                                <td>
                                    <h3>
                                        {book.title.slice(0, 30)}
                                        {book.title.length > 30 ? "...." : ""}
                                    </h3>
                                    <p>{book.author}</p>
                                    <p
                                        className={`${
                                            book.isAvailable
                                                ? "text-success"
                                                : "text-danger"
                                        }`}
                                    >
                                        Status :{" "}
                                        {book.isAvailable
                                            ? "Active"
                                            : "Not Avaialble"}
                                    </p>
                                </td>
                                <td>
                                    <Link to={`/user/edit-book/${book._id}`}>
                                        <Button
                                            variant="outline-dark"
                                            className="me-2"
                                        >
                                            Edit
                                        </Button>
                                    </Link>

                                    <Button variant="outline-danger">
                                        Delete
                                    </Button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            ) : (
                ""
            )}
        </>
    );
}

export default BookTable;
