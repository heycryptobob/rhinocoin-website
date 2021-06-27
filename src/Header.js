import Title from "./Title.svg"
import { Navbar, Container, Nav } from "react-bootstrap";
import { TelegramPlane } from "@styled-icons/fa-brands";

export default function Header() {
  return (
    <Navbar bg="transparent" variant="dark" expand="lg" id="header">
      <Container>
        <Navbar.Brand href="#header">
          <img src={Title} height="40" alt="logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto fs-5">
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#tokenomics">Tokenomics</Nav.Link>
            <Nav.Link href="#roadmap">Roadmap</Nav.Link>
            {/* <Nav.Link href="#fund">Fund</Nav.Link> */}
            {/* <Nav.Link href="#team">Team</Nav.Link> */}
            <Nav.Link href="https://t.me/RhinoCoinOfficial"
              target="_blank"
              rel="noreferrer"
              ><TelegramPlane size={24} /></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
