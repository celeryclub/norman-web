import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
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
          element={
            <Dashboard
              coffeeProvider={coffeeProvider}
              roastProvider={roastProvider}
            />
          }
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
          element={
            <RoastList
              coffeeProvider={coffeeProvider}
              roastProvider={roastProvider}
            />
          }
        />
        <Route
          path="/roasts/:id"
          element={
            <RoastDetails
              coffeeProvider={coffeeProvider}
              roastProvider={roastProvider}
            />
          }
        />
      </Routes>
    </Router>
  );
}

const rootNode = document.createElement('div');
document.body.appendChild(rootNode);
ReactDOM.render(<App />, rootNode);
