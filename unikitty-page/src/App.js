import React, { Component } from 'react';
import LinkButton from './LinkButton.js';
import PdfView from './pdfView.js';
import './App.css';


class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Ninni.Tech</h1>
        <PdfView className="pdf"/>
      </div>
    );
  }
}

export default App;
