import React from "react";

function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <a style={{ paddingLeft: "15px" }} className="navbar-brand" href="#">
          elusivate
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          style={{ justifyContent: "right", paddingRight: "15px" }}
          className="collapse navbar-collapse"
          id="navbarNav"
        >
          <ul className="navbar-nav">
            <li className="nav-item active">
              <a className="nav-link" href="#">
                to <span className="sr-only"> </span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                elucidate
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                the
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link disabled" href="#">
                elusive
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
