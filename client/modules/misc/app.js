import React, { Component } from 'react';
import Header from './header';
import Footer from './footer';

export default class App extends Component { // eslint-disable-line
  render() {
    return (
      <div>
        <Header />
        { this.props.children }
        <Footer />
      </div>
    );
  }
}

App.propTypes = { children: React.PropTypes.node.isRequired };
