import { Headings } from "../../components";
import EditBookForm from "../../components/books/EditBookForm";

function EditBookPage() {
    return (
        <div>
            <Headings pageTitle="Edit Book" />
            <EditBookForm />
        </div>
    );
}

export default EditBookPage;
