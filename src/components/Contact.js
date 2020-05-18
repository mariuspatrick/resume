import React, { Component } from "react";

class Contact extends Component {
  render() {
    const { contact } = this.props.resumeObject;
    console.log("contact info: ", contact);
    return <div></div>;
  }
}

export default Contact;
