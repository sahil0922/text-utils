import React from "react";
import PropTypes from "prop-types";

const Navbar = (props) => {
  return (
    <nav className={`navbar navbar-expand-lg bg-${props.mode}`}>
      <div className="container-fluid">
        {/* <a className="navbar-brand" href="/"> {props.title} </a> */}
        {props.title}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0" >
            <li className="nav-item">
              {/* <a className="nav-link active" aria-current="page" href="/"> Home </a> */}
              Home
            </li>
            <li className="nav-item">
              {/* <a className="nav-link" href="/"> {props.about}</a> */}
              {props.about}
            </li>
          </ul>
          {/* <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-primary" type="submit">
              Search
            </button>
          </form> */}

          {/* for switching between modes */}
          <div className={`form-check form-switch mx-5 text-${props.mode === 'light' ? 'dark' : 'light'}`}>
            <input
              onClick={props.toggleMode}
              className="form-check-input"
              type="checkbox"
              id="flexSwitchCheckDefault"
            />
            <label className="form-check-label" htmlFor="flexSwitchCheckDefault">
              Dark Mode
            </label>
          </div>
        </div>
      </div>
    </nav>
  );
};

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  about: PropTypes.string.isRequired,
};

Navbar.defaultProps = {
  title: "Set title now",
  about: "About",
};

export default Navbar;
