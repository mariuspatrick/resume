import React, { Component } from "react";
import logo from "../logo.svg";
import "../App.css";

class Myself extends Component {
  render() {
    const { personal } = this.props.resumeObject;

    return (
      <div className="myself">
        <h1 className="myself__header">{personal.name}</h1>
        <h3 className="myself__subheader">{personal.summary}</h3>

        <div className="myself__react-container">
          <a
            style={{ textDecoration: "none" }}
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Made with React
          </a>
          <img src={logo} className="App-logo" alt="React logo" />
        </div>
      </div>
    );
  }
}

export default Myself;
