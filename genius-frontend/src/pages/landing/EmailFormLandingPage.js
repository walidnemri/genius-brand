import React from "react";
import "./EmailFormLandingPage.css";
import db from "../../components/firebase";

class EmailForm extends React.Component {
  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
    this.submitForm = this.submitForm.bind(this);
    this.state = {
      email: [],
    };
    console.log(this.state.email);
  }

  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
    console.log(this.state);
  };

  submitForm = (e) => {
    e.preventDefault();
    let newPostKey = firebase.database().ref().child("email").push().key;
    var updates = {};
    updates["/email/" + newPostKey] = { email: this.state.email };
    firebase.database().ref().update(updates);
  };

  render() {
    return (
      <div className="form-box">
        <h2 className="text-form">Don't miss anything?</h2>
        <form onSubmit={this.submitForm} className="newsletter-form">
          <input
            type="email"
            id="email"
            name="email"
            onChange={this.onChange}
            value={this.state.email}
            placeholder="Email"
            className="email-form"
          />
          <input type="submit" value="submit" className="submit-form" />
        </form>
      </div>
    );
  }
}

export default EmailForm;
