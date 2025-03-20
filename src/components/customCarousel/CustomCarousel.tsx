import { Carousel } from "react-bootstrap";
import library_img1 from "../../assets/img-1.jpg";
import library_img2 from "../../assets/img-2.jpg";
import library_img3 from "../../assets/img-3.jpg";
// import CustomCarouselItem from "./CustomCarouselItem";
// import { CustomCarouselItemsInput } from "../../assets/carouselItems/carouselItem";

function CustomCarousel() {
    return (
        <Carousel className="mt-4">
            {/* {CustomCarouselItemsInput.map((item, index) => (
                <CustomCarouselItem
                    key={index}
                    imgSrc={item.imgSrc}
                    title={item.heading}
                    text={item.subHeading}
                />
            ))} */}
            <Carousel.Item>
                <img src={library_img1} />
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
                <img src={library_img2} />
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
                <img src={library_img3} />
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
