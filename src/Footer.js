import { Container, Row, Col } from "react-bootstrap";
import { Telegram } from "@styled-icons/fa-brands";

export default function Footer() {
  return (
    <footer>
      <Container className="p-5">
        <Row>
          <Col>
            <p className="fw-bold text-white fs-3">$RHINO</p>
            <p className="fs-7">
              The Content shared on this website is for information purpose only
              and, thus, should not be considered as financial advice.
              Trading/Investing is risky and you should never invest more than
              you can afford to lose. Cryptocurrencies are risky. Never invest
              more than you can afford to lose. You alone assume the sole
              responsibility of evaluating the merits and risks associated with
              the use of any information or other Content on the Site before
              making any decisions based on such information or other Content.
            </p>
          </Col>
          <Col className="d-flex justify-content-end">
            <a
              href="https://t.me/RhinoCoinOfficial"
              target="_blank"
              rel="noreferrer"
              className="text-white"
            >
              <Telegram size={40} />
            </a>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}
