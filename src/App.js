import React, { Component } from 'react';
import './normalize.css';
import './App.css';
import Wrapper from './components/Wrapper/Wrapper';
import Nav from './components/Nav/Nav';
import Footer from './components/Footer/Footer';
import routes from './routes';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav />
        {/* route === /dashboard ? <Panel /> : ''; */}

        <Wrapper>
          {routes}
        </Wrapper>

        <Footer />
      </div>
    );
  }
}

export default App;
