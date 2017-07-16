import React, { PureComponent } from 'react';
import { Link, hashHistory } from 'react-router';
import { Field, reduxForm } from 'redux-form/immutable';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as authActionCreators from '../actions/auth';

class Login extends PureComponent {
  login() {
    this.props.authActions.login(this.props.location.query.next || '/admin')
  }

  render() {
    return(
      <section className="banner style2 fullscreen onload-image-fade-in onload-content-fade-right orient-center content-align-center image-position-center">
        <div className="content">
          <h1>Admin Login</h1> <hr />
          <form>
            <div className="field">
              <label htmlFor="email">Email Address</label>
              <Field
                name="email"
                type="email"
                component="input"
              placeholder="email" />
            </div>

            <div className="field">
              <label htmlFor="password">Password</label>
              <Field
                name="password"
                type="password"
                component="input"
              placeholder="password" />
            </div>
            <ul className="actions">
              <li>
                <button type="button" onClick={() => this.login()}>
                  Login
                </button>
              </li>
            </ul>
          </form>
        </div>
        <div className="image">
          <img src="https://source.unsplash.com/category/people/1600x900" />
        </div>
      </section>

    )

  }
};

function mapDispatchToProps(dispatch) {
  return {
    authActions: bindActionCreators(authActionCreators, dispatch),
  }
}

export default reduxForm({ form: 'login' })(connect(null, mapDispatchToProps)(Login));
