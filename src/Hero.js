import { useState, useEffect } from 'react'
import logo from './logo.svg'
import { Container, Row, Col } from "react-bootstrap";
import Tada from 'react-reveal/Tada';


export default function Hero() {

  const [touch, setTouch] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setTouch(touch + 1)
    }, 5000);
    return () => clearInterval(interval);
  }, [touch]);

  return (
    <Container className="pt-5 pb-5 mt-5 mb-5">
      <Row className="pt-5 pb-5 mt-5 mb-5">
        <Col lg={{ offset: 1, span: 5 }} xxl={{ offset: 2, span: 4 }}>
          <h1 className="display-4 text-white fw-bold pb-4">
            HOLD <span className="text-danger">$RHINO</span>,<br />
            WIN $RHINO.
          </h1>
          <p>The biggest daily competition token that also shields you from whales, bots, and dumps.</p>
        </Col>
        <Col className="d-flex justify-content-center align-items-center">
        <Tada spy={touch}>
        <img src={logo} width="256" height="256" alt="logo" />
        </Tada>
        </Col>
      </Row>
    </Container>
  );
}
