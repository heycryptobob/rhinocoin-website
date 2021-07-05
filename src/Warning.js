import { Alert } from 'react-bootstrap'
import { TelegramPlane } from "@styled-icons/fa-brands";
// import Countdown from 'react-countdown';

// const date = Date.parse('03 Jul 2021 13:00:00 GMT')

export default function Warning() {
  return (
    <Alert variant="info" className="bg-secondary mb-0 rounded-0 text-center d-flex justify-content-center align-items-center">
      <Alert.Link
        href="https://t.me/RhinoCoinOfficial"
        target="_blank"
        rel="noreferrer"
        className="d-flex justify-content-center align-items-center text-decoration-none text-white"
      >
        <TelegramPlane size={20} />
        <span className="ms-1">
        Join the RhinoCoin Telegram community by clicking here.
        </span>
      </Alert.Link>
    </Alert>
  );
}
