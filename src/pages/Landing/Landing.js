import React, { Component } from 'react';
import './Landing.css';
import Hero from '../../components/Hero/Hero';
import Section from '../../components/Section/Section';

class Landing extends Component {
  render() {
    return (
      <div className="Landing">
        <Hero
         heading="Ecommerce made easy"
         message="Build an online store with "
         buttonPath="/about"
         buttonLabel="Sign Up"
        />
        <Section
         heading="Get up and running in minutes"
         message="Most small businesses don't have hours to build an online store. We are here to make it as easy as a few clicks."
         backgroundClr="#ebebeb"
        />
      </div>
    );
  }
}

export default Landing;