import React from 'react';
import Navbar from './Components/Navbar';
import Jumbotron from './Components/Jumbotron';
import Card from './Components/Card';

function App() {
  return (
    <div className="container-fluid">
      <Navbar />
      <Jumbotron />
      <Card />
    </div>
  );
}

export default App;
