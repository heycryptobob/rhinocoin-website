import { useState, useEffect } from "react";
import logo from "./logo.png";
import { Container, Row, Col, Button } from "react-bootstrap";
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
              The biggest contest token that also shields you from whales and dumps.
            </p>
            <Button size="lg" className="me-2 mt-2" href="https://pancakeswap.finance/swap?outputCurrency=0xe7886f869d7ae46f5ff88034125a445ea01576e6" target="_blank">Buy $RHINO</Button>
            <Button variant="outline-primary" className="me-2 mt-2" size="lg" href="https://www.dextools.io/app/pancakeswap/pair-explorer/0xb855d091518961269af7ed08dcadb54aa84d53ab" target="_blank">Chart</Button>
            <Button variant="outline-primary" className="me-2 mt-2" size="lg" href="https://bscscan.com/token/0xe7886f869d7ae46f5ff88034125a445ea01576e6" target="_blank">Contract</Button>
            <Button variant="outline-primary" className="me-2 mt-2" size="lg" href="https://t.me/RhinoCoinOfficial" target="_blank">Telegram</Button>
            <p className="pt-3">
              <span>Contract Address: </span><code>0xe7886f869d7ae46f5ff88034125a445ea01576e6</code>
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
