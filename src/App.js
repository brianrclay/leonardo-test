import React from 'react';
import { generateAdaptiveTheme } from '@adobe/leonardo-contrast-colors';
import './App.css';

// returns theme colors as JSON
let myTheme = generateAdaptiveTheme({
  colorScales: [
    {
      name: 'lightTheme',
      colorKeys: ['#cacaca'],
      colorspace: 'HSL',
      ratios: [1, 2, 3, 4.5, 8, 12]
    }
  ],
  baseScale: 'lightTheme',
  brightness: 97
});

function App() {
  return (
    <div className="App">
      <div className="wrapper">
        <div className="box 100" />
        <div className="box 200" />
        <div className="box 300" />
        <div className="box 400" />
        <div className="box 500" />
      </div>
      <div className="wrapper">
        <div className="box 100" />
        <div className="box 200" />
        <div className="box 300" />
        <div className="box 400" />
        <div className="box 500" />
      </div>
    </div>
  );
}

export default App;
