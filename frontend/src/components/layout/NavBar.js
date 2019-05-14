import React from "react";

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark mb-4">
      <a
        className="navbar-brand mb-0 h1"
        style={{ color: "white", fontSize: "3rem" }}
        href="/"
      >
        <i className="fas fa-paw " style={{ color: "#e55d19" }} /> Stock Fox
      </a>
      <button
        style={{ color: "white" }}
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarTogglerDemo02"
        aria-controls="navbarTogglerDemo02"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>

      <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
        <ul className="navbar-nav mr-auto mt-2 mlt-lg-0 inline-flex list-inline">
          <li className="nav-item active list-inline-item">
            <a className="nav-link" href="/">
              Home
            </a>
          </li>
          <li>
            <a className='nav-link' href='/register'>Register</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
