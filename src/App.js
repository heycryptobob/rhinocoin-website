import './App.scss';
import {
  HashRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './Home';
import StonksBros from './StonksBros';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/stonksbros"><StonksBros /></Route>
          <Route path="/"><Home /></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
