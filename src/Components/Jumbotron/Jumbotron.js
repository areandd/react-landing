import React from 'react';


function Jumbotron() {
    return (
      <div style={{backgroundColor:"silver", borderRadius:"5px", width:"100%", marginRight: "10px", marginBottom: "10px"}}>
        <div className="jumbotron-fluid" >
          <h1 className="display-4" style={{color:"white", padding:"10px"}}>obligation to my species </h1>
          <p className="lead" style={{color:"white", padding:"10px"}}>
As currently estimated there are 7.753 Billion humans. Last I checked I was only 1 of those humans. Just running the numbers I could sit back and allow the other 7.753 billion to bear the burden for our species. I could get fat and lazy; in the end some other man would take on what I hadn’t. That wouldn’t be so terrible for the species, I wouldn’t be letting my people down…
</p>
          <a className="btn btn-primary btn-lg" href="#" role="button" style={{margin:"5px"}}>elusivate</a>
        </div>
      </div>
    );
  }
export default Jumbotron;