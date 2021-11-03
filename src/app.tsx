import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Coffees from './routes/Coffees';
import Roasts from './routes/Roasts';

const App = () => {
  return (
    <Router>
      <h1>Norman</h1>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/coffees">Coffees</Link>
          </li>
          <li>
            <Link to="/roasts">Roasts</Link>
          </li>
        </ul>
      </div>
      <hr />
      <Switch>
        <Route exact path="/">
          <p>Home</p>
        </Route>
        <Route path="/coffees">
          <Coffees />
        </Route>
        <Route path="/roasts">
          <Roasts />
        </Route>
      </Switch>
    </Router>
  );
};

const rootNode = document.createElement('div');
document.body.appendChild(rootNode);
ReactDOM.render(<App />, rootNode);
