import { Container, Row, Col, Card } from "react-bootstrap";
import Slide from "react-reveal/Slide";

const data = [
  {
    title: "Daily Competitions",
    text: "Holders can win $RHINO by participating in daily competitions.",
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
    text: "Holders can only sell maximum 0.0025% of the total supply.",
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
            <span className="border-bottom border-4 border-success pb-2">
              Big giveaways. Strong protections.
            </span>
          </h2>
        </Col>
      </Row>
      <Row xs={1} md={2} lg={3}>
        <Slide bottom>
          {data.map((d, k) => (
            <Feature key={k} feature={d} />
          ))}
        </Slide>
      </Row>
    </Container>
  );
}
