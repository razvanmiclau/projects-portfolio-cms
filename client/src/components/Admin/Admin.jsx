import React, { PureComponent } from 'react';
import TopNavigation from './UI/TopNavigation';
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
        <TopNavigation logout={this.logout} />
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
