import React from "react";

function Card() {
  return (
    <div
      className="card"
      style={{ width: "100%", margin: "10px", backgroundColor: "silver" }}
    >
      <img src="https://placeimg.com/500/325/any?t=1661984586671" />
      <div className="card-body">
        <h5 className="card-title"></h5>
        <p className="card-text" style={{ color: "white" }}>
          I am Isaiah Desta. I am one man…
        </p>
        <a href="#" className="btn btn-primary">
          elucidate
        </a>
      </div>
    </div>
  );
}

export default Card;
