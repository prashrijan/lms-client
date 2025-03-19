import { Col, Container, Row } from "react-bootstrap";
import CustomCarousel from "../../components/customCarousel/CustomCarousel";
import JustIn from "../../components/pageSection/JustIn";
import BestRead from "../../components/pageSection/BestRead";
import Recommendation from "../../components/pageSection/Recommendation";

function HomePage() {
    return (
        <Container>
            <Row>
                <Col>
                    {/* hero section */}
                    <CustomCarousel />

                    {/* just in section */}
                    <JustIn />

                    {/* best read section */}
                    <BestRead />
                    {/* recommendation section */}
                    <Recommendation />
                </Col>
            </Row>
        </Container>
    );
}

export default HomePage;
