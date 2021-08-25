import './App.scss';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './Home';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/stonksbros">Stonks Bros</Route>
          <Route path="/"><Home /></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
