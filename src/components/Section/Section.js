import React from 'react';
import './Section.css';
import img from '../../img/_hiring.svg';

function Section(props) {
  return (
    <section className="Section" style={props.backgroundImg ? { background: '' } : { backgroundColor: props.backgroundClr }}>
    <img src={img} className="Section__img" alt="Puzzled" />
      <div className="Section__main">
        <h1 className="Section__main__heading">{ props.heading }</h1>
        <p align="left" className="Section__main__message">{ props.message }</p>
      </div>
    </section>
  );
}

export default Section;