import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { login, signup } from '../../actions/session_actions'
import { clearErrors } from '../../actions/error_actions'
import '../../css/session_form.scss'

class SessionForm extends Component {
  constructor(props) {
    super(props);
    this.formType = this.props.location.pathname.slice(1);

    if (this.formType === "login") {
      this.state = { email: "", password: "" };
    } else {
      this.state = { email: "", name: "", password: "" };
    }

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(field) {
    return e => {
      this.setState({ [field]: e.currentTarget.value });
    };
  }

  componentWillUnmount() {
    this.props.clearErrors();
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    user.image_url = "https://s3.amazonaws.com/minkstarter1/quickstarter_avatar.png"
    if (e.currentTarget.value === "Demo login") {
      this.props.processForm(
        { email: "guest@guest.com", password: "password" }
      );
    } else {
      this.props.processForm(user);
    }
  }

  signupLink() {
		if (this.formType === "login") {
			return (
        <p className="signup">
          New to Quickstarter?
          &nbsp;
          <Link to="/signup">Sign up!</Link>
        </p>
      );
		} else {
      return "";
		}
	}

  loginLink() {
    if (this.formType === "signup") {
      return (
        <p className="login">
          Have an account?
          &nbsp;
          <Link to="/login">Log in</Link>
        </p>
      );
    } else {
      return "";
    }
  }

	renderErrors() {
    if (this.props.errors) {
      return (
        <ul className="session-errors">
          {this.props.errors.map((error, i) => (
            <li key={`error-${i}`}>
              {error}
            </li>
          ))}
        </ul>
      );
    }
	}

  renderNameField() {
    if (this.formType === "signup") {
      return(
        <input type="text"
          value={this.state.name}
          onChange={this.update("name")}
          className="login-input" placeholder="Name" />
      );
    } else {
      return "";
    }
  }

  renderHeader() {
    if (this.formType === "signup") {
      return <h1>Sign up</h1>;
    } else {
      return <h1>Log in</h1>;
    }
  }

  button() {
    if (this.formType === "login") {
      return "Log me in!";
    } else {
      return "Create account";
    }
  }

  demoButton() {
    if (this.formType === "login") {
      return <input type="submit" value="Demo login" onClick={this.handleSubmit} />;
    }
  }

	render() {
		return (
			<div className="login-form-container">
				<form onSubmit={this.handleSubmit} className="login-form-box">
          {this.loginLink()}
					<div className="login-form">
            {this.renderHeader()}
            {this.renderErrors()}
						<br/>
            {this.renderNameField()}
            <br/>
						<input type="text"
							value={this.state.email}
							onChange={this.update("email")}
							className="login-input" placeholder="Email" />
						<br/>
						<input type="password"
							value={this.state.password}
							onChange={this.update("password")}
							className="login-input" placeholder="Password" />
						<br/>
						<input type="submit" value={this.button()} />
						{this.demoButton()}
					</div>
          {this.signupLink()}
				</form>
			</div>
		);
	}
}

const mapDispatchToProps = (dispatch, { location }) => {
  const formType = location.pathname.slice(1);
  const processForm = (formType === 'login') ? login : signup;

  return {
    processForm: user => dispatch(processForm(user)),
    clearErrors: () => dispatch(clearErrors()),
  };
};

export default connect(null, mapDispatchToProps)(SessionForm)
