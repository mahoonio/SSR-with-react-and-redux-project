import React from 'react';
import { Link } from 'react-router-dom';
import { connect, Connect } from 'react-redux';
const Header = ({ auth }) => {
  console.log('the auth status : ', auth);
  const authButton = auth ? (
    <a href="/api/logout">Logout</a>
  ) : (
    <a href="/api/auth/google">Login</a>
  );
  return (
    <nav>
      <div className="nav-wrapper">
        <Link to={'/'} className="brand-logo">
          React SSR
        </Link>
        <ul className="right">
          <li>
            <Link to={'/users'}>Users</Link>
          </li>
          <li>
            <Link to={'/admins'}>Admins</Link>
          </li>
          <li>{authButton}</li>
        </ul>
      </div>
    </nav>
  );
};
const mapStateToProps = ({ auth }) => {
  //the function input is redux global state.auth
  return { auth };
};
export default connect(mapStateToProps)(Header);
