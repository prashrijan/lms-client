import { Carousel } from "react-bootstrap";

type CustomCarouselItemProps = {
    imgSrc: string;
    title: string;
    text: string;
};

function CustomCarouselItem({ imgSrc, title, text }: CustomCarouselItemProps) {
    return (
        <>
            <img src={imgSrc} />
            <Carousel.Caption className="carousel-caption-bg rounded p-2">
                <h3>{title}</h3>
                <hr />
                <p>{text}</p>
            </Carousel.Caption>
        </>
    );
}

export default CustomCarouselItem;
