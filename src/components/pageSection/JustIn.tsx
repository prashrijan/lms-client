import CustomCard from "../customCard/customCard";
import SectionTitle from "../sectionTitle/sectionTitle";
import img1 from "../../assets/img-1.jpg";

function JustIn() {
    return (
        <div>
            <SectionTitle title="Just In" />
            <div className="d-flex gap-5 flex-wrap flex-grow-1">
                <CustomCard
                    thumbnail={img1}
                    title="War and Peace"
                    author="Prashrijan"
                    publishedYear={2023}
                    description="A loving book"
                    slug="war-and-peace"
                />
                <CustomCard
                    thumbnail={img1}
                    title="War and Peace"
                    author="Prashrijan"
                    publishedYear={2023}
                    description="A loving book"
                    slug="war-and-peace"
                />
                <CustomCard
                    thumbnail={img1}
                    title="War and Peace"
                    author="Prashrijan"
                    publishedYear={2023}
                    description="A loving book"
                    slug="war-and-peace"
                />
                <CustomCard
                    thumbnail={img1}
                    title="War and Peace"
                    author="Prashrijan"
                    publishedYear={2023}
                    description="A loving book"
                    slug="war-and-peace"
                />
                <CustomCard
                    thumbnail={img1}
                    title="War and Peace"
                    author="Prashrijan"
                    publishedYear={2023}
                    description="A loving book"
                    slug="war-and-peace"
                />
            </div>
        </div>
    );
}

export default JustIn;
