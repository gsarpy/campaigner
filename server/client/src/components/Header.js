import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class Header extends Component {
  renderAuthButton() {
    switch (this.props.auth) {
      case null:
        return 'Updating...';
      case false:
        return <a href="/auth/google">Login With Google</a>;
      default:
        return <a href="/api/logout">Logout</a>;
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
            <li>
              {this.renderAuthButton()}
            </li>
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
