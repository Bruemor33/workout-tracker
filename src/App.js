import React from 'react';
import './App.scss';
import Navigation from './navigation/navigation.component';
import Home from './home/home.component';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Home></Home>
        <Navigation></Navigation>
      </header>
    </div>
  );
}

export default App;
