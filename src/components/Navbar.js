import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

const Navbar = () => {

  return (
    <div>
      <nav className="navbar fixed-top navbar-expand-lg navbar-dark" style={{ backgroundColor: '#24245a' }}>
        <div className="container-fluid">
          <div>
            <Link className="navbar-brand" style={{ fontSize: '30px' }} to="/">  <strong>SpeedNews</strong></Link>
          </div>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              {/* <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/"> <button className="navbtn">Home</button> </Link>
              </li> */}
              <li className="nav-item">
                <Link className="nav-link active" to="/Business">  <button className="navbtn">Business</button>  </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/Health"> <button className="navbtn">Health</button> </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/Sports"> <button className="navbtn">Sports</button> </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/Entertainment"> <button className="navbtn">Entertainment</button> </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/Technology"> <button className="navbtn">Technology</button> </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/About"> <button className="navbtn">About</button> </Link>
              </li>
            </ul>

            <div class="dropdown">
              <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Country
              </button>
              <div class="dropdown-menu" aria-labelledby="dropdownMenuButton" style={{position:'relative', zIndex:'5', marginTop:'5cm', backgroundColor:'blue' }}>
                <a class="dropdown-item" href="#">Action</a>
                <a class="dropdown-item" href="#">Another action</a>
                <a class="dropdown-item" href="#">Something else here</a>
              </div>
            </div>

          </div>
        </div>
      </nav>
    </div>
  )
}


export default Navbar
