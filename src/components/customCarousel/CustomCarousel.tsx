import { Carousel } from "react-bootstrap";
import img1 from "../../assets/img-1.jpg";
import img2 from "../../assets/img-2.jpg";
import img3 from "../../assets/img-3.jpg";

function CustomCarousel() {
    return (
        <Carousel className="mt-4">
            <Carousel.Item>
                <img src={img1} />
                <Carousel.Caption className="carousel-caption-bg rounded p-2">
                    <h3>Welcome to Our Library</h3>
                    <hr />
                    <p>
                        Explore a world of knowledge and discover your next
                        favorite book.
                    </p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img src={img2} />
                <Carousel.Caption className="carousel-caption-bg rounded p-2">
                    <h3>Unleash Your Imagination</h3>
                    <hr />
                    <p>
                        Find books that spark creativity and fuel your passion
                        for learning.
                    </p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img src={img3} />
                <Carousel.Caption className="carousel-caption-bg rounded p-2">
                    <h3>Discover Endless Stories</h3>
                    <hr />
                    <p>
                        Dive into a collection of books that inspire, educate,
                        and entertain.
                    </p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
}

export default CustomCarousel;
