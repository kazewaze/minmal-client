import React, { Component } from 'react';
import './Nav.css';
import { Link } from 'react-router-dom';
import logo from '../../img/minmal.png';

class Nav extends Component {
  render() {
    return (
      <nav className="Nav">
        <Link className="Nav__logo" to="/"><img src={logo} /></Link>
        <ul className="Nav__links">
          {/* <li><Link className="Nav__links__link" to="/about">About</Link></li> */}
          <li><Link className="Nav__links__link" to="/contact">Sign In</Link></li>
        </ul>
      </nav>
    );
  }
}

export default Nav;