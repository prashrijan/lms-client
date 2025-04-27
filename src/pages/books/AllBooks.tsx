import { Button, ButtonGroup, Col, Container, Row } from "react-bootstrap";
import CustomCard from "../../components/customCard/CustomCard";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store/store";
import { Link, useNavigate } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
import CustomCardList from "../../components/customCard/CustomCardList";
import { useState } from "react";
import "./styles/Books.styles.css";

const AllBooks = () => {
    const [view, setView] = useState<string>("Card");
    const books = useSelector(
        (state: RootState) => state.booksInfo?.publicBooks
    );
    const navigate = useNavigate();

    return (
        <Container className="p-4">
            <Row className="mb-4">
                <Col>
                    <Link to={-1 as any}>
                        <Button
                            variant="dark"
                            className="back-button shadow-sm"
                        >
                            <IoIosArrowBack size={20} />
                            <span>Go Back</span>
                        </Button>
                    </Link>
                </Col>
            </Row>

            <Row className="align-items-center justify-content-between mb-3">
                <Col xs="auto">
                    <h5 className="mb-0">
                        {books.length} {books.length <= 1 ? "Book" : "Books"}{" "}
                        Found!
                    </h5>
                </Col>
                <Col xs="auto">
                    <ButtonGroup>
                        <Button
                            onClick={() => setView("Card")}
                            variant={view === "Card" ? "dark" : "outline-dark"}
                        >
                            Card
                        </Button>
                        <Button
                            onClick={() => setView("List")}
                            variant={view === "List" ? "dark" : "outline-dark"}
                        >
                            List
                        </Button>
                    </ButtonGroup>
                </Col>
            </Row>

            <Row>
                <Col>
                    <div
                        className={`booklist-container d-flex gap-4 flex-wrap mt-3 ${
                            view === "Card"
                                ? "justify-content-center"
                                : "flex-column"
                        }`}
                    >
                        {books.map((book) =>
                            view === "Card" ? (
                                <CustomCard
                                    key={book._id}
                                    title={book.title}
                                    author={book.author}
                                    publishedYear={book.publishedYear}
                                    slug={book.slug}
                                    thumbnail={
                                        typeof book.thumbnail === "string"
                                            ? book.thumbnail
                                            : ""
                                    }
                                />
                            ) : (
                                <CustomCardList
                                    key={book._id}
                                    title={book.title}
                                    author={book.author}
                                    description={book.description}
                                    publishedYear={book.publishedYear}
                                    slug={book.slug}
                                    thumbnail={
                                        typeof book.thumbnail === "string"
                                            ? book.thumbnail
                                            : ""
                                    }
                                />
                            )
                        )}
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default AllBooks;
