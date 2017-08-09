import React, { PureComponent } from 'react';
import { Link } from 'react-router';

export default class TopNavigation extends PureComponent {
  render() {
    const { logout } = this.props;

    return(
      <nav className="navbar navbar-default navbar-overlay">
        <div className="container-fluid">
          <div className="navbar-header">
            <ul className="nav navbar-nav">
              <li><Link to="/admin" className="navbar-brand">Dashboard</Link></li>
              <li><Link to="admin/projects" className="navbar-brand">Projects</Link></li>
              <li><Link to="admin/sections" className="navbar-brand">Sections</Link></li>
            </ul>
          </div>
          <ul className="nav navbar-nav navbar-right">
            <li><Link to="/" className="navbar-brand">Website</Link></li>
            <li><Link to="/" onClick={() => logout()} className="button special small">Logout</Link></li>
          </ul>
        </div>
      </nav>
    )
  }
};
