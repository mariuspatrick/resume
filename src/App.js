import React, { Component } from "react";
import "./App.css";
import Myself from "./components/Myself";
import Codaisseur from "./components/Codaisseur";
import Contact from "./components/Contact";
import { Route, Switch } from "react-router-dom";

class App extends Component {
  render() {
    const information = this.props.resumeJson;

    return (
      <div className="App">
        <Myself resumeObject={information} />
        <Codaisseur resumeObject={information} />
        <Switch>
          <Route
            path
            to="/contact"
            // resumeObject={information.personal}
            component={Contact}
          />
        </Switch>
      </div>
    );
  }
}

export default App;
