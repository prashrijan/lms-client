import { Carousel } from "react-bootstrap";

import CustomCarouselItem from "./CustomCarouselItem";
import { CustomCarouselItemsInput } from "../../assets/carouselItems/carouselItem";

function CustomCarousel() {
    return (
        <Carousel className="mt-4">
            {CustomCarouselItemsInput.map((item, index) => (
                <Carousel.Item key={index}>
                    <CustomCarouselItem
                        imgSrc={item.imgSrc}
                        title={item.heading}
                        text={item.subHeading}
                    />
                </Carousel.Item>
            ))}
        </Carousel>
    );
}

export default CustomCarousel;
