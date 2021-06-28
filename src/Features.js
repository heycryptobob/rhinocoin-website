import { Container, Row, Col, Card } from "react-bootstrap";

const data = [
  {
    title: "Daily Contests",
    text: "Winners are rewarded $RHINO by participating in contests.",
  },
  {
    title: "Hold & Earn",
    text: "Holders earn $RHINO passively on every buy or sell transaction.",
  },
  {
    title: "Community Driven",
    text: "The community runs the show, the team facilitates competitions.",
  },
  {
    title: "Anti-Whale",
    text: "Every wallet is limited to 2.5% of the total supply.",
  },
  {
    title: "Anti-Bot",
    text: "Short-term holders are subject to additional fees.",
  },
  {
    title: "Anti-Dump",
    text: "Holders can only sell maximum 0.5% of the total supply.",
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

export default function Features() {
  return (
    <Container id="features" className="pt-5 pb-5">
      <Row>
        <Col>
          <h2 className="display-6 fw-bold text-white text-center pb-5">
            <span className="border-bottom border-4 border-primary pb-2">
              Big rewards. Strong protections.
            </span>
          </h2>
        </Col>
      </Row>
      <Row xs={1} md={2} lg={3} className="d-flex align-items-stretch">
        {data.map((d, k) => (
          <Feature key={k} feature={d} />
        ))}
      </Row>
    </Container>
  );
}
