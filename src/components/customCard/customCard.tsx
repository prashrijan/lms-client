import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

type CustomCardProps = {
    thumbnail: string;
    title: string;
    description?: string;
    slug: string;
    author: string;
    publishedYear: number;
};

function CustomCard({
    thumbnail,
    title,
    description,
    author,
    publishedYear,
    slug,
}: CustomCardProps) {
    return (
        <Card style={{ width: "17.6rem", padding: ".8rem" }}>
            <Card.Img variant="top" src={thumbnail} />
            <Card.Body className="text-center">
                <Card.Title>{title}</Card.Title>
                <Card.Text>
                    {author} - {publishedYear}
                </Card.Text>
                <Card.Text>{description}</Card.Text>
                <Link to={`/book/${slug}`}>
                    <Button variant="dark">View More</Button>
                </Link>
            </Card.Body>
        </Card>
    );
}

export default CustomCard;
