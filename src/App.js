import React from 'react';
import './App.css';
import Calculator from './components/Calculator';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Klaus Calculator</h1>
        <p>Microsserviço de Calculadora</p>
      </header>
      <main>
        <Calculator />
      </main>
    </div>
  );
}

export default App;