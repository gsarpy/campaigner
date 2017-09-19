import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Billing from './Billing';

class Header extends Component {
  renderLoggedInNav() {
    switch (this.props.auth) {
      case null:
        return 'Updating...';
      case false:
        return <a href="/auth/google">Login With Google</a>;
      default:
        return [
          <li key={'1'}><Billing /></li>,
          <li key={'3'} style={{margin: '0 10px' }}>
            Credits: {this.props.auth.credits}
          </li>,
          <li key={'2'}><a href="/api/logout">Logout</a></li>,
        ];
    }
  }

  render() {
    const brandLink = (this.props.auth) ? '/surveys' : '/';
    return (
      <nav>
        <div className="nav-wrapper">
          <Link
            to={brandLink}
            className="left brand-logo"
          >
            Campaigner
          </Link>
          <ul className="right">
            {this.renderLoggedInNav()}
          </ul>
        </div>
      </nav>
    );
  }
}

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps)(Header);
