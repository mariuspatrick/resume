import React, { Component } from "react";

class Codaisseur extends Component {
  render() {
    const { codaisseur } = this.props.resumeObject;
    console.log("codaisseur: ", codaisseur);
    return (
      <div className="codaisseur">
        <h1 style={{ color: "red" }}>{codaisseur.company}</h1>
        <p className="address">{codaisseur.location}</p>
      </div>
    );
  }
}

export default Codaisseur;
