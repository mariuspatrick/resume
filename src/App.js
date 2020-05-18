import React, { Component } from "react";
import "./App.css";
import Myself from "./components/Myself";
import Codaisseur from "./components/Codaisseur";

class App extends Component {
  render() {
    const information = this.props.resumeJson;

    return (
      <div className="App">
        <Myself resumeObject={information} />
        <Codaisseur resumeObject={information} />
      </div>
    );
  }
}

export default App;
