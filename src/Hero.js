import { useState, useEffect } from "react";
import logo from "./logo.png";
import { Container, Row, Col } from "react-bootstrap";
import Tada from "react-reveal/Tada";
import Header from './Header';

export default function Hero() {
  const [touch, setTouch] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTouch(touch + 1);
    }, 5000);
    return () => clearInterval(interval);
  }, [touch]);

  return (
    <div className="hero">
      <Header />
      <Container className="pt-5 pb-5 mt-5 mb-5">
        <Row className="pt-5 pb-5 mt-5 mb-5">
          <Col
            lg={{ offset: 1, span: 5 }}
            xxl={{ offset: 2, span: 4 }}
            className="pt-5 pb-5"
          >
            <h1 className="display-4 text-white fw-bold pb-4">
              HOLD <span className="text-primary">$RHINO</span>,<br />
              WIN $RHINO.
            </h1>
            <p className="fs-4">
              The biggest contest token that also shields you from whales, bots,
              and dumps.
            </p>
          </Col>
          <Col className="d-flex justify-content-center align-items-center">
            <Tada spy={touch}>
              <img src={logo} width="256" height="256" alt="logo" />
            </Tada>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
