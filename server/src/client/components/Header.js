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
    <div>
      <Link to={'/'}>React SSR</Link>
      <div>
        <Link to={'/users'}>Users</Link>
        <Link to={'/admins'}>Admins</Link>
        {authButton}
      </div>
    </div>
  );
};
const mapStateToProps = ({ auth }) => {
  //the function input is redux global state.auth
  return { auth };
};
export default connect(mapStateToProps)(Header);
