// @flow weak

import React, {
  PureComponent
}                     from 'react';
import PropTypes      from 'prop-types';
import {
  Row,
  Col,
  Button
}                     from 'react-bootstrap';
import Form from 'react-validation/build/form';
import Input from 'react-validation/build/input';
import Request from 'superagent';
// import AnimatedView   from '../../components/animatedView/AnimatedView';


function fakeLogin({ username }) {
  return new Promise(
    resolve => {
      setTimeout(
        () => resolve({ token: '1234567890123456', username }),
        200
      );
    }
  );
}

class Login extends PureComponent {

 constructor (props) {
  super(props);
  this.state = {
    email: '',
    password: ''
  }
}

  componentDidMount() {
    const { actions: { enterLogin } } = this.props;
    enterLogin();
  }

  componentWillUnmount() {
    const { actions: { leaveLogin } } = this.props;
    leaveLogin();
  }

  render() {
    const {
      email,
      password,
      isAuthenticating
    } = this.state;

    return (
      <div className="content">
        <Row>
          <Col
            md={4}
            mdOffset={4}
          >
            <form
              className="form-horizontal" onSubmit={this.handlesOnLogin}
              noValidate>
              <fieldset>
                <legend>
                  Login
                </legend>

                <div className="form-group">
                  <label
                    htmlFor="inputEmail"
                    className="col-lg-2 control-label">
                    Email
                  </label>
                  <div className="col-lg-10">
                    <input
                      type="text"
                      className="form-control"
                      id="inputEmail"
                      placeholder="Email"
                      value={this.state.email}
                      onChange={this.handlesOnEmailChange}
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label
                    htmlFor="inputPassword"
                    className="col-lg-2 control-label">
                    Password
                  </label>
                  <div className="col-lg-10">
                    <input
                      type="password"
                      className="form-control"
                      id="inputPassword"
                      placeholder="Password"
                      value={this.state.password}
                      onChange={this.handlesOnPasswordChange}
                    />
                  </div>
                </div>
                <div className="form-group">
                  <Col
                    lg={10}
                    lgOffset={2}
                  >
                    <Button
                      className="login-button btn-block"
                      bsStyle="primary"
                      disabled={isAuthenticating}
                      onClick={this.handlesOnLogin}>
                      {
                        isAuthenticating
                          ?
                          <span>
                            login in...
                            &nbsp;
                            <i
                              className="fa fa-spinner fa-pulse fa-fw"
                            />
                          </span>
                          :
                          <span>
                            Login
                          </span>
                      }
                    </Button>
                  </Col>
                </div>
              </fieldset>
            </form>
          </Col>
        </Row>
      </div>
    );
  }

  handlesOnEmailChange = (event) => {
    event.preventDefault();
    // should add some validator before setState in real use cases
    this.setState({ email: event.target.value.trim() });
  }

  handlesOnPasswordChange = (event) => {
    event.preventDefault();
    // should add some validator before setState in real use cases
    this.setState({ password: event.target.value.trim() });
  }

  handlesOnLogin = async (event) => {
    event.preventDefault();
    const {
      history
    } = this.props;

    const {
      email,
      password
    } = this.state;

    const user = {
      username: email,
      password: password
    };
    const request = require('superagent');


  var self = this;

  fetch("http://180.151.85.196:8083/api/v1/users/admin/login", {
  method: 'POST',
  headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
  body: JSON.stringify({
    email: this.state.email,
    password: this.state.password,
  })
  })
.then((response) => response.text())
.then((responseText) => {
  alert(responseText);
})
 .catch((error) => {
   console.error(error);
 });
}
 
  
}

export default Login;
