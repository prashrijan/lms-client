import { Container, Form, InputGroup, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../../assets/readify-logo.png";
import { IoHome } from "react-icons/io5";
import { FaSignInAlt } from "react-icons/fa";
import { HiOutlineLogin, HiOutlineLogout } from "react-icons/hi";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store/store";
import { User } from "../../types/types";
import { LuLayoutDashboard } from "react-icons/lu";
import { logoutUserApi } from "../../services/authApi";
import { setUser } from "../../features/user/userSlice";
import { ImSearch } from "react-icons/im";

function Header() {
    const { user } = useSelector((state: RootState) => state.userData) as {
        user: User;
    };
    const dispatch = useDispatch<any>();

    const handleLogout = (): void => {
        logoutUserApi();
        sessionStorage.removeItem("accessToken");
        localStorage.removeItem("refreshToken");
        dispatch(setUser({}));
    };

    return (
        <Navbar expand="md" className="bg-dark bg-gradient " variant="dark">
            <Container>
                <Link to="/">
                    <img src={logo} alt="logo" width={"155px"} />
                </Link>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <div className="d-flex w-100 justify-content-between flex-column flex-md-row p-3 p-md-2">
                        <div></div>
                        <Form className="custom-width">
                            <InputGroup className="">
                                <Form.Control
                                    placeholder="Search Your Favorite Book"
                                    aria-label="Search Your Favorite Book"
                                    aria-describedby="basic-addon2"
                                />
                                <InputGroup.Text id="basic-addon2">
                                    <ImSearch />
                                </InputGroup.Text>
                            </InputGroup>
                        </Form>
                        <Nav className="">
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
                                        to="/"
                                        onClick={handleLogout}
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
                    </div>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Header;
