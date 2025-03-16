import { Link } from "react-router-dom";
import { Headings } from "../../components";
import { Button } from "react-bootstrap";
import { IoIosArrowBack } from "react-icons/io";
import CreateBookForm from "../../components/books/CreateBookForm";

function NewBookPage() {
    return (
        <div className="py-3">
            <Headings pageTitle="Create A New Book" />
            <Link to={-1 as any}>
                <Button variant="secondary" className="mb-4">
                    <IoIosArrowBack />
                    Back
                </Button>
            </Link>
            <CreateBookForm />
        </div>
    );
}

export default NewBookPage;
