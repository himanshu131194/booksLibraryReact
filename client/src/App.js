import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
//Components exported
import Header from './components/Header';
import Footer from './components/Footer';
//End Components exported

class App extends Component {
  render() {
    return (
      <html className="App">
        <body>
          <div>
            <Header />
            <Footer />
            <div className="clearfix"></div>
          </div>
        </body>
      </html>
    );
  }
}

export default App;
