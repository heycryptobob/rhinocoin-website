import { useState, useEffect } from "react";
import logo from "./logo.png";
import { Container, Row, Col } from "react-bootstrap";
import Tada from "react-reveal/Tada";
import { Telegram, TwitterSquare } from "@styled-icons/fa-brands";

export default function Soon() {
  const [touch, setTouch] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTouch(touch + 1);
    }, 5000);
    return () => clearInterval(interval);
  }, [touch]);

  return (
    <Container className="m-5 p-5 text-center">
      <Row>
        <Col>
          <Tada spy={touch}>
            <img src={logo} width="256" height="256" alt="logo" />
          </Tada>
        </Col>
      </Row>
      <Row className="pt-5">
        <Col>
          <h1 className="display-6">Launching Website at 500 Telegram Members</h1>
        </Col>
      </Row>
      <Row className="pt-5">
        <Col>
          <a
            href="https://t.me/RhinoCoinOfficial"
            target="_blank"
            rel="noreferrer"
            className="text-white"
          >
            <Telegram size={40} />
          </a>
          <a
            href="https://twitter.com/RhinoCoinBSC"
            target="_blank"
            rel="noreferrer"
            className="text-white ms-3"
          >
            <TwitterSquare size={40} />
          </a>
        </Col>
      </Row>
    </Container>
  );
}
