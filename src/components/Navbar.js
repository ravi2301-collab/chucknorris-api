import React from 'react';
import { Link } from 'react-router-dom'


function Navbar(props) {
    return (
       <nav className="navbar navbar-expand-sm bg-light  p-4 navbar-light">
           <a className="navbar-brand" href="#"> React App</a>

            <ul className="navigation ml-auto px-5">
                <Link to="/">
                        <li className="nav-link"> Login </li>
                </Link>
                
                <Link to="/Jokes">
                        <li className="nav-link">Jokes </li>
                </Link>

            </ul>
       </nav>
    );
}

export default Navbar;