import { Carousel } from "react-bootstrap";

type CustomCarouselItemProps = {
    imgSrc: string;
    title: string;
    text: string;
};

function CustomCarouselItem({ imgSrc, title, text }: CustomCarouselItemProps) {
    return (
        <Carousel.Item>
            <img src={imgSrc} className="d-block w-100" alt={title} />
            <Carousel.Caption className="carousel-caption-bg rounded p-2">
                <h3>{title}</h3>
                <hr />
                <p>{text}</p>
            </Carousel.Caption>
        </Carousel.Item>
    );
}

export default CustomCarouselItem;
