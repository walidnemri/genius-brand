import React from "react";
import "./EmailFormLandingPage.css";
import firebase from "firebase";
import Modal from "../../components/modalEmail/Modal.js";

class EmailForm extends React.Component {
  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
    this.submitForm = this.submitForm.bind(this);
    this.state = {
      email: "",
      showModal: false,
    };
    console.log(this.state.email);
  }

  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
    console.log(this.state);
    console.log(this.state.showModal);
  };

  hideModal = () => {
    this.setState({ showModal: false });
    console.log(this.state.showModal);
  };

  submitForm = (e) => {
    e.preventDefault();
    let newPostKey = firebase.database().ref().child("email").push().key;
    var updates = {};
    updates["/email/" + newPostKey] = { email: this.state.email };
    firebase.database().ref().update(updates);
    console.log(this.state.showModal);
    if (this.state.email !== "") {
      this.setState({ email: "", showModal: true });
    }
    console.log(this.state.showModal);
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
            required
          />
          <input type="submit" value="submit" className="submit-form" />
        </form>
        <Modal show={this.state.showModal} handleClose={this.hideModal}>
          <p>Thank you for sharing us your address !</p>
          <p>
            We will update you by email for future news and our next coming up
            collections
          </p>
        </Modal>
      </div>
    );
  }
}

export default EmailForm;
