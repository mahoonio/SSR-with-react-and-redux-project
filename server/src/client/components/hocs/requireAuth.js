import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

export default (ChildComponent) => {
  class RequireAuth extends Component {
    render() {
      switch (this.props.auth) {
        case null:
          return <div>Loading...</div>;
        case false:
          return <Redirect to={'/'} />;

        default:
          return <ChildComponent />;
      }
    }
  }

  const mapStateToProps = ({ auth }) => {
    return { auth };
  };

  return connect(mapStateToProps)(ChildComponent);
};
