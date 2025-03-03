import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../../assets/readify-logo.png";
import { IoHome } from "react-icons/io5";
import { FaSignInAlt } from "react-icons/fa";
import { HiOutlineLogin } from "react-icons/hi";
type Props = {};

function Header({}: Props) {
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
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Header;
