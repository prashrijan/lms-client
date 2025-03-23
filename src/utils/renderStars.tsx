import { FaStar, FaStarHalfAlt } from "react-icons/fa";

const STARS = 5;
const colors = {
    orange: "#F2C265",
    grey: "a9a9a9",
};

export const renderStars = (rating: number) => {
    const fullStars = Math.floor(STARS);
    const stars = [];

    for (let i = 0; i < fullStars; i++) {
        stars.push(
            <FaStar key={`full-${i}`} size={24} color={colors.orange} />
        );
    }

    if (rating % 1 !== 0) {
        stars.push(
            <FaStarHalfAlt key="half" size={24} color={colors.orange} />
        );
    }

    const remainingStars = STARS - stars.length;
    for (let i = 0; i < remainingStars; i++) {
        stars.push(<FaStar key={`empty-${i}`} size={24} color={colors.grey} />);
    }

    return stars;
};
