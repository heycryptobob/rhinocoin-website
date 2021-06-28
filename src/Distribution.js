import { Container, Row, Col, Card } from "react-bootstrap";

const data = [
  {
    title: "40% Pool",
    text: "40% of fees is transformed into liquidity. This helps create a price floor (stability).",
  },
  {
    title: "30% Fund",
    text: "30% of fees will go to the token fund that is used to reward our competition participants.",
  },
  {
    title: "20% Holders",
    text: "20% of fees will be redistributed to our loyal holders as a long-term incentive.",
  },
  {
    title: "10% Burn",
    text: "10% of fees will be removed from circulation, increasing the value of each token.",
  },
];

function Feature({ feature }) {
  return (
    <Col className="p-4">
      <Card bg="transparent" className="border-0 p-4">
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

export default function Distribution() {
  return (
    <Container id="fees" className="pt-5 pb-5">
      <Row>
        <Col>
          <h2 className="display-6 fw-bold text-white text-center pb-5">
            <span className="border-bottom border-4 border-primary pb-2">
              Fee Distribution
            </span>
          </h2>
        </Col>
      </Row>

      <Row xs={1} md={2} lg={4} className="d-flex align-items-stretch">
        {data.map((d, k) => (
          <Feature key={k} feature={d} />
        ))}
      </Row>
    </Container>
  );
}
