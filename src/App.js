import React from 'react';
import logo from './logo.svg';
import SortingVisualizer from './SortingVisualizer/SortingVisualizer';
import { NavigationBar } from './components/NavigationBar';

import './App.css';

function App() {
  return (
/*    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          申花是冠军🏆
        </a>
      </header>
    </div>
    */
    <div className="App">
      <SortingVisualizer></SortingVisualizer>

    </div>
  );
}

export default App;
