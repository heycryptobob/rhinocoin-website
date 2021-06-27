import { Container, Row, Col, Card } from "react-bootstrap";
import Slide from "react-reveal/Slide";

const data = [
  {
    title: "100m",
    text: "Total supply",
  },
  {
    title: "2.5m",
    text: "Max. hold",
  },
  {
    title: "250k",
    text: "Max. sell",
  },
  {
    title: "30 min",
    text: "Sell lock",
  },
  {
    title: "10%",
    text: "Transaction fee",
  },
  {
    title: "20%",
    text: "Weak hands tax",
  },
];

function Feature({ feature }) {
  return (
    <Col className="p-3 text-center">
      <Card bg="transparent" className="border-0 p-4 pt-5 pb-5">
        <Card.Body>
          <Card.Title className="text-white fw-bolder fs-3 pb-3">
            {feature.title}
          </Card.Title>
          <Card.Text>{feature.text}</Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
}

export default function Tokenomics() {
  return (
    <Container id="tokenomics" className="pt-5 pb-5">
      <Row className="pb-5 text-center">
        <Col>
          <h2 className="display-6 fw-bold text-white text-center p4-5">
            <span className="border-bottom border-4 border-danger pb-2">
              Tokenomics
            </span>
          </h2>
        </Col>
      </Row>

      <Row></Row>

      <Row xs={1} sm={2} lg={4} className="d-flex justify-content-center">
        <Slide bottom>
          {data.map((d, k) => (
            <Feature key={k} feature={d} />
          ))}
        </Slide>
      </Row>

      <Row>
        <Col md={{ offset: 3, span: 6 }} className="text-center">
          <p className="fs-7">
            Weak hands tax is applied to sell transactions where the wallet had
            a buy transaction in the previous 24 hours.
          </p>
        </Col>
      </Row>
    </Container>
  );
}
