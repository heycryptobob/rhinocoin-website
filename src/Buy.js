import { Container, Row, Col } from "react-bootstrap";

export default function Buy() {
  return (
    <Container id="tokenomics" className="p-5 m-5">
      <Row className="pb-5 text-center">
        <Col>
          <h2 className="display-6 fw-bold text-white text-center pb-5">
            <span className="border-bottom border-4 border-danger pb-2">
              How To Buy
            </span>
          </h2>
        </Col>
      </Row>
    </Container>
  );
}
