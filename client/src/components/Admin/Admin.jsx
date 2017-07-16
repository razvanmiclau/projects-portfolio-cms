import React, { PureComponent } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as authActionsCreators from '../../actions/auth';

class Admin extends PureComponent {

  constructor(props) {
    super(props);
    this.logout = this.logout.bind(this);
  }

  logout() {
    this.props.authActions.logout();
    localStorage.removeItem('token')
  }

  render() {
    return(
      <div id="wrapper" className="divider">
        <nav className="navbar navbar-default">
          <div className="container-fluid">
            <div className="navbar-header">
              <Link to="/admin" className="navbar-brand">Admin</Link>
              <ul className="nav navbar-nav">
                <li><Link to="admin/projects" className="navbar-brand">Projects</Link></li>
                <li><Link to="admin/sections" className="navbar-brand">Sections</Link></li>
              </ul>
            </div>
            <ul className="nav navbar-nav navbar-right">
              <li><Link to="/">Website</Link></li>
              <li><Link to="/" onClick={this.logout}>Logout</Link></li>
            </ul>
          </div>
        </nav>
        {this.props.children}
      </div>
    )
  }
};

function mapDispatchToProps (dispatch) {
  return {
    authActions: bindActionCreators(authActionsCreators, dispatch)
  }
}

export default connect(null, mapDispatchToProps)(Admin);
