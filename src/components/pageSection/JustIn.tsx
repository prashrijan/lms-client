import CustomCard from "../customCard/CustomCard";
import SectionTitle from "../sectionTitle/SectionTitle";

import { useSelector } from "react-redux";
import { RootState } from "../../redux/store/store";
import { Books } from "../../types/types";

function JustIn() {
    const publicBooks = useSelector(
        (store: RootState) => store.booksInfo?.publicBooks
    );

    let justInBooks: Books[] = [];

    if (publicBooks.length) {
        const sorted = [...publicBooks].sort(
            (a, b) =>
                new Date(b.createdAt).getTime() -
                new Date(a.createdAt).getTime()
        );

        justInBooks = sorted.slice(0, 4);
    }

    return (
        <div>
            <SectionTitle title="Just In" />
            <div className="d-flex gap-5 flex-wrap flex-grow-1">
                {justInBooks.map((book) => (
                    <CustomCard
                        thumbnail={
                            typeof book.thumbnail === "string"
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

export default JustIn;
