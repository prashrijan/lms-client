import { useEffect, useState } from "react";
import { Alert, Button, Col, Container, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import { AppDispatch, RootState } from "../../redux/store/store";
import { Books } from "../../types/types.ts";

import { RenderStars } from "../../utils/RenderStars.tsx";
import { IoIosArrowBack } from "react-icons/io";
import { getSingleBookAction } from "../../features/books/bookAction.ts";
import { HashLoader } from "react-spinners";

function BookLandingPage() {
    const { slug } = useParams();
    const dispatch = useDispatch<AppDispatch>();
    const navigate = useNavigate();
    const [showLoading, setShowLoading] = useState<boolean>(false);

    const selectedBook = useSelector(
        (store: RootState) => store.booksInfo?.selectedBook as Books
    );

    const fetchData = async () => {
        setShowLoading(true);
        try {
            await dispatch(getSingleBookAction(slug));
        } finally {
            setShowLoading(false);
        }
    };
    useEffect(() => {
        // local approach
        // const foundBook = publicBooks?.find((book) => book.slug === slug);
        // setSelectedBook(foundBook);
        // second approach
        fetchData();
    }, [slug, dispatch]);

    return (
        <Container className="p-4 ">
            {showLoading ? (
                <div
                    className="d-flex justify-content-center align-items-center"
                    style={{ minHeight: "550px" }}
                >
                    <HashLoader />
                </div>
            ) : (
                <>
                    <Link to={-1 as any} className="text-decoration-none">
                        <Button
                            variant="dark"
                            className="back-button shadow-sm"
                        >
                            <IoIosArrowBack size={20} />
                            <span>Go Back</span>
                        </Button>
                    </Link>

                    {!selectedBook?._id && (
                        <Row>
                            <Col>
                                <Alert variant="danger">
                                    This book is not available , please contact
                                    admin.
                                </Alert>
                            </Col>
                        </Row>
                    )}

                    {/* Book Details Row */}
                    {selectedBook?._id && (
                        <Row className="align-items-start p-4 shadow-lg rounded bg-light">
                            {/* Book Image */}
                            <Col md={4} className="text-center mb-4">
                                <img
                                    src={
                                        typeof selectedBook?.thumbnail ===
                                        "string"
                                            ? selectedBook.thumbnail
                                            : "/placeholder.jpg"
                                    }
                                    alt={selectedBook?.title || "Book Cover"}
                                    className="img-fluid rounded shadow-lg img-thumbnail"
                                    style={{
                                        maxHeight: "400px",
                                        objectFit: "cover",
                                    }}
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
                                    {RenderStars(
                                        selectedBook?.averageRating ?? 0
                                    )}
                                </div>

                                <p className="text-muted">
                                    {selectedBook?.description ||
                                        "No description available."}
                                </p>
                                <hr />

                                {/* Add to Borrow List Button */}
                                <Button
                                    variant="dark"
                                    className="rounded-pill px-4 shadow"
                                >
                                    Add to Borrow List
                                </Button>
                            </Col>
                        </Row>
                    )}
                </>
            )}
            {/* Go Back Button */}
        </Container>
    );
}

export default BookLandingPage;
