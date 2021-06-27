import logo from './logo.svg'
import { Container, Row, Col } from "react-bootstrap";

export default function Hero() {
  return (
    <Container className="pt-5 pb-5 mt-5 mb-5">
      <Row>
        <Col lg={{ offset: 1, span: 5 }} xxl={{ offset: 2, span: 4 }}>
          <h1 className="display-4 text-white fw-bold pb-4">
            HOLD <span className="text-danger">$RHINO</span>,<br />
            WIN $RHINO.
          </h1>
          <p>The biggest daily competition token that also shields you from whales, bots, and dumps.</p>
        </Col>
        <Col className="d-flex justify-content-center align-items-center">
        <img src={logo} width="256" height="256" alt="logo" />
        </Col>
      </Row>
    </Container>
  );
}
