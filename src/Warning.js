import { Alert } from 'react-bootstrap'

export default function Warning() {
  return (
    <Alert variant="warning" className="mb-0 rounded-0 text-center">
      Contract has <strong>NOT</strong> been released. Stay safe, only join the {" "}
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
