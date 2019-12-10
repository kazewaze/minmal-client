import React from 'react';
import './Header.css';

function Header(props) {
  return (
    <header className="Header">
      { props.children }
    </header>
  );
}

export default Header;