import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import CoffeeProvider from './providers/CoffeeProvider';
import RoastProvider from './providers/RoastProvider';
import Coffees from './routes/Coffees';
import Roasts from './routes/Roasts';

const coffeeProvider = new CoffeeProvider();
const roastProvider = new RoastProvider();

const App = () => {
  return (
    <Router>
      <h1>Norman</h1>
      <div>
        <ul>
          <li>
            <Link to="/">Dashboard</Link>
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
          <h2>Dashboard</h2>
        </Route>
        <Route path="/coffees">
          <Coffees coffeeProvider={coffeeProvider} />
        </Route>
        <Route path="/roasts">
          <Roasts
            coffeeProvider={coffeeProvider}
            roastProvider={roastProvider}
          />
        </Route>
      </Switch>
    </Router>
  );
};

const rootNode = document.createElement('div');
document.body.appendChild(rootNode);
ReactDOM.render(<App />, rootNode);
