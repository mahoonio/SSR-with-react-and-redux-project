import React from 'react';
import { Link } from 'react-router-dom';
import { connect, Connect } from 'react-redux';
const Header = ({ auth }) => {
  console.log('the auth status : ', auth);
  return (
    <div>
      <Link to={'/'}>React SSR</Link>
    </div>
  );
};
const mapStateToProps = ({ auth }) => {
  //the function input is redux global state.auth
  return { auth };
};
export default connect(mapStateToProps)(Header);
