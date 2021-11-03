import React from 'react';
import ReactDOM from 'react-dom';
import Coffees from './routes/Coffees';

const App = () => {
  return (
    <>
      <h1>Norman</h1>
      <hr />
      <Coffees />
    </>
  );
};

const rootNode = document.createElement('div');
document.body.appendChild(rootNode);
ReactDOM.render(<App />, rootNode);
