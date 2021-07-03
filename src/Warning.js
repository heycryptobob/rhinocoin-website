import { Alert } from 'react-bootstrap'
// import Countdown from 'react-countdown';

// const date = Date.parse('03 Jul 2021 13:00:00 GMT')

export default function Warning() {
  return (
    <Alert variant="success" className="mb-0 rounded-0 text-center">
      Presale on {" "}
      <Alert.Link
      href="https://dxsale.app/app/v2_9/defipresale?saleID=244&chain=BSC"
      target="_blank"
        rel="noreferrer"
      >DXSale</Alert.Link>
      . Stay safe, only join the {" "}
      <Alert.Link
        href="https://twitter.com/RhinoCoinBSC"
        target="_blank"
        rel="noreferrer"
      >
        official community
      </Alert.Link>.
    </Alert>
  );
}
