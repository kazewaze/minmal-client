import React from 'react';
import './Hero.css';
import { Link } from 'react-router-dom';
import img from '../../img/_working.svg';

function Hero(props) {
  return (
    <header className="Hero">
      <div className="Hero__main">
        <h1 className="Hero__main__heading">{ props.heading }</h1>
        <p align="left" className="Hero__main__message">{ props.message }<span style={{fontWeight: 900}}>minmal</span> hassle.</p>
        { props.buttonPath ? <Link className="Hero__main__btn" to={props.buttonPath}>{ props.buttonLabel }</Link> : '' }
      </div>
      <img src={img} className="Hero__img" alt="Hangout" />
    </header>
  );
}

export default Hero;