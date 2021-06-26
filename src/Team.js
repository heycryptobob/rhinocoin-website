import { Container, Row, Col } from 'react-bootstrap'

const data = [
  { username: 'Nikil Gupta', link: 'https://t.me/nikilgupta',  role: 'Competitions & Marketing' },
  { username: 'Spaceman Bob', link: 'https://t.me/heycryptobob',  role: 'Tokenomics & Website' },
  { username: 'Anoop', link: 'https://t.me/Anoopppp', role: 'Contract Development' },
  { username: 'Anon', link: 'https://t.me/Anonkun', role: 'Marketing & Comms' },
  { username: 'Mr Siege', link: 'https://t.me/Mrsige', role: 'Marketing & Comms' },
  // { username: '',  role: '' },
  // { username: '',  role: '' },
]

export default function Team() {
  return (
    <Container id="team" className="p-5 m-5">
      <Row className="pb-5 text-center">
        <Col>
          <h2 className="display-6 fw-bold text-white text-center pb-5">
            <span className="border-bottom border-4 border-warning pb-2">
              The Team
            </span>
          </h2>
        </Col>
      </Row>
    </Container>
  )
}