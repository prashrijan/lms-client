import { Stack } from "react-bootstrap";
import { Link } from "react-router-dom";

const Sidebar = () => {
    return (
        <Stack gap={3}>
            <div className="p-2">
                <Link className="nav-link" to="/user">
                    Dashboard
                </Link>
            </div>
            <div className="p-2">
                <Link className="nav-link" to="/user/books">
                    Books
                </Link>
            </div>
            <div className="p-2">
                <Link className="nav-link" to="/user/user-list">
                    All Users
                </Link>
            </div>
            <div className="p-2">
                <Link className="nav-link" to="/user/borrow">
                    Borrow History
                </Link>
            </div>
            <div className="p-2">
                <Link className="nav-link" to="/user/profile">
                    Profile
                </Link>
            </div>
        </Stack>
    );
};

export default Sidebar;
