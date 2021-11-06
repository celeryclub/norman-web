import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import CoffeeProvider from './providers/CoffeeProvider';
import RoastProvider from './providers/RoastProvider';
import Coffees from './routes/Coffees';
import Roasts from './routes/Roasts';

import 'normalize.css';

const coffeeProvider = new CoffeeProvider();
const roastProvider = new RoastProvider();

const App = () => {
  return (
    <Router>
      <h1>Norman</h1>
      <div>
        <nav>
          <Link to="/">Dashboard</Link>
          {' | '}
          <Link to="/coffees">Coffees</Link>
          {' | '}
          <Link to="/roasts">Roasts</Link>
        </nav>
      </div>
      <hr />
      <Routes>
        <Route path="/" element={<p>dashboard</p>} />
        <Route
          path="/coffees"
          element={<Coffees coffeeProvider={coffeeProvider} />}
        />
        <Route
          path="/roasts"
          element={
            <Roasts
              coffeeProvider={coffeeProvider}
              roastProvider={roastProvider}
            />
          }
        />
      </Routes>
    </Router>
  );
};

const rootNode = document.createElement('div');
document.body.appendChild(rootNode);
ReactDOM.render(<App />, rootNode);
