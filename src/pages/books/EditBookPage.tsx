import { Button } from "react-bootstrap";
import { Headings } from "../../components";
import EditBookForm from "../../components/books/EditBookForm";
import { IoIosArrowBack } from "react-icons/io";
import { Link } from "react-router-dom";

function EditBookPage() {
    return (
        <div>
            <Headings pageTitle="Edit Book" />
            <Link to={-1 as any}>
                <Button variant="secondary" className="mb-4">
                    <IoIosArrowBack />
                    Back
                </Button>
            </Link>
            <EditBookForm />
        </div>
    );
}

export default EditBookPage;
