import { useEffect, useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { RootState } from "../../redux/store/store";
import { Books } from "../../types/types";
import { RenderStars } from "../../utils/RenderStars.tsx";
import { IoIosArrowBack } from "react-icons/io";

function BookLandingPage() {
    const { slug } = useParams();

    const publicBooks = useSelector(
        (store: RootState) => store.booksInfo?.publicBooks
    );

    const [selectedBook, setSelectedBook] = useState<Books | undefined>(
        undefined
    );

    useEffect(() => {
        const foundBook = publicBooks?.find((book) => book.slug === slug);
        setSelectedBook(foundBook);
    }, [publicBooks, slug]);

    return (
        <Container className="p-4">
            {/* Go Back Button */}
            <Link to={-1 as any} className="text-decoration-none">
                <Button
                    variant="dark"
                    className="mb-3 px-4 d-flex align-items-center gap-2 shadow"
                >
                    <IoIosArrowBack size={20} />
                    Go Back
                </Button>
            </Link>

            {/* Book Details Row */}
            <Row className="align-items-start p-4 shadow-lg rounded bg-light">
                {/* Book Image */}
                <Col md={4} className="text-center mb-4">
                    <img
                        src={
                            typeof selectedBook?.thumbnail === "string"
                                ? selectedBook.thumbnail
                                : "/placeholder.jpg"
                        }
                        alt={selectedBook?.title || "Book Cover"}
                        className="img-fluid rounded shadow-lg img-thumbnail"
                        style={{ maxHeight: "400px", objectFit: "cover" }}
                    />
                </Col>

                {/* Book Details */}
                <Col md={8} className="text-dark">
                    <h2 className="mb-3 text-primary fw-bold">
                        {selectedBook?.title || "Book Title"}
                    </h2>
                    <p className="fw-semibold text-secondary">
                        {selectedBook?.author}{" "}
                        <span className="text-muted">
                            {" "}
                            - {selectedBook?.publishedYear}
                        </span>
                    </p>
                    <p className="fw-medium text-uppercase">
                        {selectedBook?.genre}
                    </p>

                    {/* Star Ratings */}
                    <div className="mb-3">
                        {RenderStars(selectedBook?.averageRating ?? 0)}
                    </div>

                    <p className="text-muted">
                        {selectedBook?.description ||
                            "No description available."}
                    </p>
                    <hr />

                    {/* Add to Borrow List Button */}
                    <Button variant="dark" className="rounded-pill px-4 shadow">
                        Add to Borrow List
                    </Button>
                </Col>
            </Row>
        </Container>
    );
}

export default BookLandingPage;
