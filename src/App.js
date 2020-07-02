import React from 'react';
import './App.css';
import Hero from './components/Hero'
import Deck from './components/Girls'
import Advantages from './components/Advantages'
import Cta from './components/Cta'

function App() {
  return (
    <div className="App">
      <Hero />
      <Deck />
      <Advantages />
      <Cta />
    </div>
  );
}

export default App;
