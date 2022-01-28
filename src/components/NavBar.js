import React, { Component } from 'react'
// import PropTypes from 'prop-types'
import { Link } from "react-router-dom";
export class NavBar extends Component {
    // static propTypes = {

    // }

    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-lg  bg-dark">
  <div className="container-fluid ">
    <Link className="navbar-brand text-white"  to="/">Breaking News</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active text-white" aria-current="page" to="/general">Home</Link>
        </li>
       
        <Link className="nav-link text-white" to="/entertainment">Entertainment</Link>
          <Link className="nav-link text-white" to="/general">General</Link>
          <Link className="nav-link text-white" to="/health">Health</Link>
          <Link className="nav-link text-white" to="/science">Science</Link>
          <Link className="nav-link text-white" to="/sports">Sports</Link>
          <Link className="nav-link text-white" to="/business">Business</Link>
          <Link className="nav-link text-white" to="/about">About</Link>
        
      </ul>
      {/* <form className="d-flex">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form> */}
    </div>
  </div>
</nav>
            </div>
        )
    }
}


export default NavBar