import React from 'react';
import { Link } from 'react-router-dom';

import authRequests from '../../firebaseRequests/auth';
import './Register.css';

class Register extends React.Component {
  state={
    user: {
      email: 'tom@tom.com',
      password: 'password',
    }
  };

  registerClickEvent = e => {
    const { user } = this.state;
    e.preventDefault();
    authRequests
      .registerUser(user)
      .then(() => {
        this.props.history.push('/mystuff');
      })
      .catch((errr) => {
        console.error('An error occurred while registering', errr);
      })
  };

  emailChange = e => {
    const tempUser = { ...this.state.user };
    tempUser.email = e.target.value;
    this.setState({ user: tempUser });
  };

  passwordChange = e => {
    const tempUser = { ...this.state.user };
    tempUser.password = e.target.value;
    this.setState({ user: tempUser });
  };

  render () {
    const { user } = this.state;
    return (
      <div id="login-form">
        <h1 className="Register text-center">Register</h1>
        <form className="form-horizontal col-sm-4 col-sm-offset-6 col-xs-offset-3">
          <div className="form-group">
            <label htmlFor="inputEmail" className="col-sm-2 control-label">
              Email:
            </label>
            <div className="col-sm-8">
              <input
                type="email"
                className="form-control"
                id="inputEmail"
                placeholder="sir.hoards.a.lot@gmail.com"
                value={user.email}
                onChange={this.emailChange}
              />
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="inputPassword" className="col-sm-4 control-label">
              Password:
            </label>
            <div className="col-sm-8">
              <input
                type="password"
                className="form-control"
                id="inputPassword"
                placeholder="Password"
                value={user.password}
                onChange={this.passwordChange}
              />
            </div>
          </div>
          <div className="form-group">
            <div className="col-sm-offset-12 text-center">
              <Link to="/login">Need to Login?</Link>
            </div>
          </div>
          <div className="form-group">
            <div className="col-sm-offset-2 col-sm-10">
              <button
                type="submit"
                className="btn btn-default col-xs-12"
                onClick={this.registerClickEvent}
              >
                Register
              </button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default Register;
