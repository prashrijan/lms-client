import SectionTitle from "../sectionTitle/SectionTitle";

import CustomCard from "../customCard/CustomCard";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store/store";
import { Books } from "../../types/types";

function BestRead() {
    const publicBooks = useSelector(
        (store: RootState) => store.booksInfo?.publicBooks
    );

    let bestReadBooks: Books[] = [];

    if (publicBooks.length) {
        const sorted = [...publicBooks].sort(
            (a, b) => b.averageRating - a.averageRating
        );

        bestReadBooks = sorted.slice(0, 4);
    }

    return (
        <div>
            <SectionTitle title="Best Read" />
            <div className="d-flex gap-5 flex-wrap flex-grow-1">
                {bestReadBooks.map((book) => (
                    <CustomCard
                        key={book._id}
                        thumbnail={
                            typeof book.thumbnail == "string"
                                ? book.thumbnail
                                : ""
                        }
                        title={book.title}
                        author={book.author}
                        publishedYear={book.publishedYear}
                        description={book.description}
                        slug={book.slug}
                    />
                ))}
            </div>
        </div>
    );
}

export default BestRead;
