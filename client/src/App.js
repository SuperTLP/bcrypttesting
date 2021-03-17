import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react'
import {BrowserRouter, Route} from 'browser-router'


function App() {
  const [messages, setCount] = usestate(0)
  setCount(messages=[])
  return (
    <div className="App">

      <BrowserRouter>
      </BrowserRouter>


    </div>
  );
}

export default App;
