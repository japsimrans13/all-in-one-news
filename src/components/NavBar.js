import React, { Component } from 'react'
// import PropTypes from 'prop-types'
import { Link } from "react-router-dom";

import moon from './moon.png'
// import sun from './sun.png'


function darktheme() {
  
  
  document.body.classList.toggle("dark-theme");

}



export class NavBar extends Component {
    // static propTypes = {

    // }

    render() {

        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-light" >
  <div className="container-fluid ">
    <Link className="navbar-brand "  to="/" >Breaking News</Link>
    <img  src={moon} alt="Moon" onClick={darktheme} className='darkimg2'  height={45} width={45} style={{cursor:"pointer",marginLeft:"30px"}}/>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active " aria-current="page" to="/general">Home</Link>
        </li>
       
        <Link className="nav-link " to="/entertainment">Entertainment</Link>
          <Link className="nav-link " to="/general">General</Link>
          <Link className="nav-link " to="/health">Health</Link>
          <Link className="nav-link " to="/science">Science</Link>
          <Link className="nav-link " to="/sports">Sports</Link>
          <Link className="nav-link " to="/business">Business</Link>
          <Link className="nav-link " to="/about">About</Link>
          <form className="d-flex" style={{marginLeft:"15px"}}>
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" id="btn2" type="submit">Search</button>
      </form>
      <img  src={moon} alt="Moon" onClick={darktheme} id="darkimg" height={45} width={45} style={{cursor:"pointer",marginLeft:"30px"}}/>
        
      </ul>

  
      
    </div>
  </div>
</nav>
            </div>
        )
    }
}


export default NavBar