import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./CustomCard.styles.css";

type CustomCardListProps = {
    thumbnail: string;
    title: string;
    description?: string;
    slug: string;
    author: string;
    publishedYear: number;
};

function CustomCardList({
    thumbnail,
    title,
    description,
    author,
    publishedYear,
    slug,
}: CustomCardListProps) {
    return (
        <div style={{ width: "39rem" }}>
            <div className="d-flex gap-3">
                <div className="m-2">
                    <Card.Img variant="top" src={thumbnail} height={"300px"} />
                </div>
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>
                        {author} - {publishedYear}
                    </Card.Text>
                    <Card.Text>{description}</Card.Text>
                    <Link to={`/book/${slug}`}>
                        <Button variant="dark">View More</Button>
                    </Link>
                </Card.Body>
            </div>
        </div>
    );
}

export default CustomCardList;
