import { Container, Row, Col } from "react-bootstrap";
import Footer from "../footer/Footer";
import Header from "../header/Header";
import { Outlet } from "react-router-dom";
import Sidebar from "../sidebar/Sidebar";
import AuthRoute from "../auth/AuthRoute";

const UserLayout = () => {
    return (
        <AuthRoute>
            <Header />

            <Container fluid>
                <Row>
                    <Col
                        md={3}
                        xl={2}
                        className="bg-dark bg-gradient text-white"
                    >
                        <div className="p-3">
                            <div>Welcome Back</div>
                            <h4>Prashrijan Shrestha</h4>
                        </div>
                        <hr />
                        <Sidebar />
                    </Col>
                    <Col md={9} xl={10}>
                        <main className="main">
                            <Outlet />
                        </main>
                    </Col>
                </Row>
            </Container>
            <Footer />
        </AuthRoute>
    );
};

export default UserLayout;
