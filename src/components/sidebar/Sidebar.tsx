import { Stack } from "react-bootstrap";
import { CgProfile } from "react-icons/cg";
import { FaUsers } from "react-icons/fa";
import { ImBooks } from "react-icons/im";
import { LuLayoutDashboard } from "react-icons/lu";
import { RiFolderHistoryLine, RiStarSmileFill } from "react-icons/ri";
import { Link } from "react-router-dom";

const Sidebar = () => {
    return (
        <Stack gap={3} className="pb-3">
            <div className="p-2">
                <Link
                    className="nav-link d-flex align-items-center gap-1"
                    to="/user"
                >
                    <LuLayoutDashboard />
                    Dashboard
                </Link>
            </div>
            <div className="p-2">
                <Link
                    className="nav-link d-flex align-items-center gap-1"
                    to="/user/books"
                >
                    <ImBooks />
                    Books
                </Link>
            </div>
            <div className="p-2">
                <Link
                    className="nav-link d-flex align-items-center gap-1"
                    to="/user/user-list"
                >
                    <FaUsers />
                    Users
                </Link>
            </div>
            <div className="p-2">
                <Link
                    className="nav-link d-flex align-items-center gap-1"
                    to="/user/borrow"
                >
                    <RiFolderHistoryLine />
                    Borrows
                </Link>
            </div>
            <div className="p-2">
                <Link
                    className="nav-link d-flex align-items-center gap-1"
                    to="/user/reviews"
                >
                    <RiStarSmileFill />
                    Reviews
                </Link>
            </div>
            <div className="p-2">
                <Link
                    className="nav-link d-flex align-items-center gap-1"
                    to="/user/profile"
                >
                    <CgProfile />
                    Profile
                </Link>
            </div>
        </Stack>
    );
};

export default Sidebar;
