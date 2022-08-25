import React from 'react';
import Navbar from './Components/Navbar/Navbar';
import Jumbotron from './Components/Jumbotron/Jumbotron';
import Card from './Components/Card/Card';

function App() {
  return (
    <div >
      <Navbar />
      <Jumbotron />
      <div style={{width: "100%", display: "flex"}}>
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
}

export default App;
