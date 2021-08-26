import { Row, Col, Container } from "react-bootstrap";
import logo from "./logo.png";
import stonks from "./stonks.png";

function StonksBros() {
  return (
    <div className="text-dark bg-white">
      <Container className="pt-5 pb-5">
        <Row className="text-center">
          <Col>
            <img src={logo} width="96" height="96" alt="RhinoCoin" />
            <p>Presents</p>
            <img src={stonks} width="256" height="128" alt="StonksBros" />
            <h1>CONTEST</h1>
            <p>26th August 2021 @ 12:00 UTC - 2nd September 2021 @ 12:00 UTC</p>
          </Col>
        </Row>

        <Row className="mt-5">
          <h2 className="text-decoration-underline">REWARDS</h2>
          <p>
            By participating in the contest, you have a chance to WIN one of the
            following rewards.
          </p>
          <ul className="fs-5">
            <li>1 x $500</li>
            <li>5 x $100</li>
            <li>20 x <a href="https://t.me/RhinoCoinOfficial/42222" target="_blank"
              rel="noreferrer">Limited Edition NFTs</a></li>
          </ul>
        </Row>

        <Row className="mt-5">
          <h2 className="text-decoration-underline">ENTRY REQUIREMENTS</h2>
          <p>
            In order to participate you must fulfill the following requirements.
          </p>
          <ul className="fs-5">
            <li>
              Become a members of{" "}
              <a
                href="https://t.me/RhinoCoinOfficial"
                target="_blank"
                rel="noreferrer"
              >
                @RhinoCoinOfficial
              </a>{" "}
              Telegram Group
            </li>
            <li>Hold at least 200,000,000,000 $RHINO ($10-$20)</li>
          </ul>
          <p>
            You can purchase $RHINO on{" "}
            <a
              href="https://pancakeswap.finance/swap?outputCurrency=0xe7886f869d7ae46f5ff88034125a445ea01576e6"
              target="_blank"
              rel="noreferrer"
            >
              PancakeSwap
            </a>
            , follow our{" "}
            <a
              href="https://youtu.be/Lp6zUNPef1Q"
              target="_blank"
              rel="noreferrer"
            >
              YouTube Tutorial
            </a>
          </p>
        </Row>

        <Row className="mt-5">
          <h2 className="text-decoration-underline">TASKS</h2>
          <p>Complete the following tasks to be eligible.</p>
          <ol className="fs-5">
            <li>
              Follow {" "}
              <a
                href="https://twitter.com/StonksBros"
                target="_blank"
                rel="noreferrer"
              >
                @StonksBros
              </a>{" "}
              on Twitter
            </li>
            <li>
              <strong>Quote Retweet</strong> the <a href="https://twitter.com/StonksBros/status/1430860080786800643?s=20" target="_blank"
                rel="noreferrer">pinned Tweet</a>, tagging 3 friends and adding the
              hashtag <code>#CryptoUNITY</code>
            </li>
            <li>
              Join the{" "}
              <a
                href="https://t.me/STONKS_Bros"
                target="_blank"
                rel="noreferrer"
              >
                @STONKS_Bros
              </a>{" "}
              Telegram group
            </li>
            <li>
              Copy the link to your Tweet and paste it into the{" "}
              <a
                href="https://t.me/RhinoCoinOfficial"
                target="_blank"
                rel="noreferrer"
              >
                @RhinoCoinOfficial
              </a>{" "}
              Telegram Group
            </li>
          </ol>
          <p className="mt-4">
          If you are having trouble, contact{" "}
          <a
            href="https://t.me/heycryptobob"
            target="_blank"
            rel="noreferrer"
          >
            @SpacemanBob
          </a>
          {" "}on Telegram. Winners will be selected randomly within 5 days of the contest end time (manual verification required). Invalid entries will be disqualified.
        </p>
        </Row>
      </Container>
    </div>
  );
}

export default StonksBros;
