import React from 'react';
import {NavLink, useLocation} from 'react-router-dom';

function Navbar(props){
    const location = useLocation();
    var temp = '';
    if(props.checker) temp = 'navbar navbar-expand-lg navbar-dark fixed-top'
    else temp = 'navbar navbar-expand-lg navbar-dark bg-dark';

    return (
    <nav className={temp}>
        <span className="navbar-brand mb-0 h1">
            <h2>Elwin Ung</h2>
        </span>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto" style={{marginRight:'1.25%'}}>
                <li className="nav-item">
                    <NavLink to="/home" className={location.pathname === "/home" ? "nav-link active" : "nav-link"}>
                        <h4>Home</h4>
                    </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="/about" className={location.pathname === "/about" ? "nav-link active" : "nav-link"}>
                        <h4>About me</h4>
                    </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="/portfolio" className={location.pathname === "/portfolio" ? "nav-link active" : "nav-link"}>
                        <h4>Portfolio</h4>
                    </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="/contact" className={location.pathname === "/contact" ? "nav-link active" : "nav-link"}>
                        <h4>Contact me</h4>
                    </NavLink>
                </li>
            </ul>
        </div>
    </nav>
    );
}

export default Navbar;