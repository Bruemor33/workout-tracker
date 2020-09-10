import React from 'react';
import './App.scss';
import Navigation from './shared/layouts/navigation/navigation.component';
import Header from './shared/layouts/header/header.component';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Navigation></Navigation>
    </div>
  );
}

export default App;
