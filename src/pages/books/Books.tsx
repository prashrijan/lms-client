import { Button } from "react-bootstrap";
import { IoAddCircleOutline } from "react-icons/io5";

import { Link } from "react-router-dom";
import { Headings } from "../../components";
import BookTable from "../../components/tables/BookTable";

const Books = () => {
    return (
        <div>
            <Headings pageTitle="Book List" />
            <div className="text-end mb-5">
                <Link to="/user/new-book">
                    <Button variant="primary">
                        <IoAddCircleOutline /> Add New Book
                    </Button>
                </Link>
            </div>
            <BookTable />
        </div>
    );
};

export default Books;
