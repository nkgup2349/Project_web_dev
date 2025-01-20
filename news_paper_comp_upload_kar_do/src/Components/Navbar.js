import React, { Component } from "react";
// import PropTypes from "prop-types";
import { Link } from "react-router-dom";

// class based-----------------------------
// export default class Navbar extends Component {
//   render() {
  // ------------------------------
  const NavBar = ()=>{ // this is function based components
  return (
      <div>
        <nav className="navbar fixed-top navbar-expand-lg" style={{ backgroundColor: "black" }} >
          <div className="container-fluid">
            <Link className="navbar-brand"style={{ color: "yellow", fontSize: "35px" }}to="/">News Daily</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse"data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">

              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item"><Link className="nav-link active"style={{ color: "white" }} aria-current="page" to="/" >Home</Link></li>
                    <li className="nav-item"><Link className="nav-link"style={{ color: "white" }}to="/business" > Business</Link></li>
                    <li className="nav-item"><Link className="nav-link"style={{ color: "white" }}to="/entertainment" > Entertainment</Link></li>
                    <li className="nav-item"><Link className="nav-link"style={{ color: "white" }}to="/health" > Health</Link></li>
                    <li className="nav-item"><Link className="nav-link"style={{ color: "white" }}to="/science" > Science</Link></li>
                    <li className="nav-item"><Link className="nav-link"style={{ color: "white" }}to="/sports" > Sports</Link></li>
                    <li className="nav-item"><Link className="nav-link"style={{ color: "white" }}to="/technology" > Technology</Link></li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    );
}

export default NavBar // add this line for function based components only
