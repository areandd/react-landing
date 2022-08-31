import React from 'react';
import Navbar from './Components/Navbar/Navbar';
import Jumbotron from './Components/Jumbotron/Jumbotron';
import Card from './Components/Card/Card';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <div >
      <Navbar />
      <div  className="container-fluid" style={{padding:"10px"}}>
        <Jumbotron />
          <div style={{width: "100%", display: "flex"}}>
            <Card />
            <Card />
            <Card />
            <Card />
          </div>
        </div>  
      <Footer /> 
    </div>
  );
}

export default App;
