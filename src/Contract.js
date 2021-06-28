import { Container, Row, Col } from "react-bootstrap";

export default function Contract() {
  return (
    <Container id="tokenomics" className="p-5 m-5">
      <Row className="pb-5 text-center">
        <Col>
          <h2 className="display-6 fw-bold text-white text-center pb-5">
            <span className="border-bottom border-4 border-primary pb-2">
              The Contract
            </span>
          </h2>
        </Col>
      </Row>
    </Container>
  );
}
