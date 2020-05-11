import React, { Component } from "react";
import "./App.css";
import Myself from "./components/Myself";

class App extends Component {
  render() {
    const information = this.props.resumeJson;

    return (
      <div className="App">
        <Myself resumeObject={information} />
      </div>
    );
  }
}

export default App;
