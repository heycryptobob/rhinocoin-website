import { Container, Row, Col, Card, ListGroup } from "react-bootstrap";
import { Circle, CheckCircle } from "@styled-icons/fa-regular";

const STATE = { TODO: 0, ONGOING: 1, DONE: 2 };

const data = [
  {
    title: "Phase 1",
    items: [
      { title: "Build Team", state: STATE.DONE },
      { title: "Tokenomics", state: STATE.DONE },
      { title: "Marketing Strategy", state: STATE.DONE },
      { title: "First Competition", state: STATE.DONE },
      { title: "Website Launch", state: STATE.DONE },
      { title: "100 Telegram Members", state: STATE.DONE },
      { title: "200 Telegram Members", state: STATE.DONE },
      { title: "500 Telegram Members", state: STATE.DONE },
      { title: "1000 Telegram Members", state: STATE.DONE },
      { title: "Apply Coinhunt & Coinsniper", state: STATE.DONE },
    ],
  },
  {
    title: "Phase 2",
    items: [
      { title: "IDO", state: STATE.DONE },
      { title: "Launch", state: STATE.DONE },
      { title: "100 Holders", state: STATE.DONE },
      { title: "500 Holders", state: STATE.DONE },
      { title: "1,000 Holders", state: STATE.DONE },
      { title: "5 Competitions", state: STATE.ONGOING },
      { title: "10 Competitions", state: STATE.TODO },
      { title: "Top 5 Coinhunt & Coinsniper", state: STATE.TODO },
      { title: "Apply Coingecko & Coinmarketcap", state: STATE.ONGOING },
      { title: "Distribute 10 BNB in Rewards", state: STATE.TODO },
    ],
  },
  {
    title: "Phase 3",
    items: [
      { title: "First Partner Competition", state: STATE.TODO },
      { title: "Approved on Coingecko", state: STATE.TODO },
      { title: "Approved on Coinmarketcap", state: STATE.TODO },
      { title: "List on CEX", state: STATE.TODO },
      { title: "5,000 Holders", state: STATE.TODO },
      { title: "10,000 Holders", state: STATE.TODO },
      { title: "100 Competitions", state: STATE.TODO },
      { title: "Giveaway 1,000 BNB (Competitions)", state: STATE.TODO },
      { title: "First Charity Donation", state: STATE.TODO },
      { title: "Expand Service Offering", state: STATE.TODO },
    ],
  },
];

function ListItem({ item }) {
  let icon;

  switch (item.state) {
    case STATE.ONGOING:
      icon = <Circle size={20} className="text-success" />;
      break;
    case STATE.DONE:
      icon = <CheckCircle size={20} className="text-success" />;
      break;
    default:
      icon = <Circle size={20} className="text-warning" />;
      break;
  }

  return (
    <ListGroup.Item className="d-flex justify-content-between align-items-center bg-transparent ps-0 pe-0 border-0 text-white fw-light">
      <span>{item.title}</span>
      {icon}
    </ListGroup.Item>
  );
}

function Feature({ feature }) {
  return (
    <Col className="p-4">
      <Card bg="transparent" className="border-0 p-4 roadmap">
        <Card.Title className="text-white fw-bolder fs-3 pb-3">
          {feature.title}
        </Card.Title>
        <ListGroup variant="flush">
          {feature.items.map((d, k) => (
            <ListItem key={k} item={d} />
          ))}
        </ListGroup>
      </Card>
    </Col>
  );
}

export default function Roadmap() {
  return (

      <Container id="roadmap" className="pt-5 pb-5">
        <Row>
          <Col>
            <h2 className="display-6 fw-bold text-white text-center pb-5">
              <span className="border-bottom border-4 border-primary pb-2">
                Our Roadmap
              </span>
            </h2>
          </Col>
        </Row>
        <Row xs={1} md={2} lg={3}>
          {data.map((d, k) => (
            <Feature key={k} feature={d} />
          ))}
        </Row>
      </Container>

  );
}
