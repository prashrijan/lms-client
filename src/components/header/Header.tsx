import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../../assets/readify-logo.png";
import { IoHome } from "react-icons/io5";
import { FaSignInAlt } from "react-icons/fa";
import { HiOutlineLogin, HiOutlineLogout } from "react-icons/hi";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store/store";
import { User } from "../../types/types";
import { LuLayoutDashboard } from "react-icons/lu";

function Header() {
    const { user } = useSelector((state: RootState) => state.userData) as {
        user: User;
    };
    return (
        <Navbar expand="md" className="bg-dark bg-gradient" variant="dark">
            <Container>
                <Link to="/">
                    <img src={logo} alt="logo" width={"155px"} />
                </Link>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Link
                            className="nav-link d-flex align-items-center gap-1"
                            to="/"
                        >
                            <IoHome />
                            Home
                        </Link>

                        {user?._id ? (
                            <>
                                <Link
                                    className="nav-link d-flex align-items-center gap-1"
                                    to="/user"
                                >
                                    <LuLayoutDashboard />
                                    Dashboard
                                </Link>
                                <Link
                                    className="nav-link d-flex align-items-center gap-1"
                                    to="/logout"
                                >
                                    <HiOutlineLogout />
                                    Logout
                                </Link>
                            </>
                        ) : (
                            <>
                                <Link
                                    className="nav-link d-flex align-items-center gap-1"
                                    to="/signup"
                                >
                                    <FaSignInAlt />
                                    SignUp
                                </Link>
                                <Link
                                    className="nav-link d-flex align-items-center gap-1"
                                    to="/login"
                                >
                                    <HiOutlineLogin />
                                    Login
                                </Link>
                            </>
                        )}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Header;
