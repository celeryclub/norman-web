import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Provider, defaultTheme } from '@adobe/react-spectrum';
import CoffeeProvider from './providers/CoffeeProvider';
import RoastProvider from './providers/RoastProvider';
import Dashboard from './routes/Dashboard';
import CoffeeList from './routes/CoffeeList';
import CoffeeDetails from './routes/CoffeeDetails';
import RoastList from './routes/RoastList';
import RoastDetails from './routes/RoastDetails';
import 'normalize.css';

const coffeeProvider = new CoffeeProvider();
const roastProvider = new RoastProvider();

function App() {
  return (
    <Provider theme={defaultTheme}>
      <Router>
        <h1>Norman ☕️</h1>
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
          <Route
            path="/"
            element={<Dashboard roastProvider={roastProvider} />}
          />
          <Route
            path="/coffees"
            element={<CoffeeList coffeeProvider={coffeeProvider} />}
          />
          <Route
            path="/coffees/:id"
            element={<CoffeeDetails coffeeProvider={coffeeProvider} />}
          />
          <Route
            path="/roasts"
            element={<RoastList roastProvider={roastProvider} />}
          />
          <Route
            path="/roasts/:id"
            element={<RoastDetails roastProvider={roastProvider} />}
          />
        </Routes>
      </Router>
    </Provider>
  );
}

const rootNode = document.createElement('div');
document.body.appendChild(rootNode);
ReactDOM.render(<App />, rootNode);
