
import './App.css';
import React from 'react';
import Infosv from './baitap/Infosv';

function App() {
  return (
    <div>
 <Infosv/>
      <h4>Browser details:{navigator.userAgent}</h4>
    </div>
        
  );
}

export default App;
