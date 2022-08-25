import React from 'react';


function Card() {
    return (
      <div style={{width: "100%", display: "flex"}}>
      
        <div className="card" style={{width: "25%"}}>
          <img src="https://placeimg.com/640/480/any" className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title"></h5>
            <p className="card-text"></p>
            <a href="#" className="btn btn-primary">Go somewhere</a>
          </div>
        </div>

        <div className="card" style={{width: "25%"}}>
          <img src="https://placeimg.com/640/480/any" className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title"></h5>
            <p className="card-text"></p>
            <a href="#" className="btn btn-primary">Go somewhere</a>
          </div>
        </div>

        <div className="card" style={{width: "25%"}}>
          <img src="https://placeimg.com/640/480/any" className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title"></h5>
            <p className="card-text"></p>
            <a href="#" className="btn btn-primary">Go somewhere</a>
          </div>
        </div>

        <div className="card" style={{width: "25%"}}>
          <img src="https://placeimg.com/640/480/any" className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title"></h5>
            <p className="card-text"></p>
            <a href="#" className="btn btn-primary">Go somewhere</a>
          </div>
        </div>

      </div>
    );
  }
  
export default Card;