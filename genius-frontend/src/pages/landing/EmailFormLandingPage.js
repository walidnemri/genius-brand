import React from "react";
import "./EmailFormLandingPage.css";

class EmailForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
    };
  }

  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  submitForm = (e) => {
    e.preventDefault();
  };

  render() {
    return (
      <div className="form-box">
        <h2>Don't miss anything?</h2>
        <form onSubmit={this.submitForm}>
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
