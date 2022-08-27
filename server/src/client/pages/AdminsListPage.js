import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchAdmins } from '../actions';
class AdminsListPage extends Component {
  componentDidMount() {
    this.props.fetchAdmins();
  }
  renderAdmins = (admins) => {
    return admins.map((admin) => {
      return <li key={admin.id}>{admin.name}</li>;
    });
  };

  render() {
    return (
      <div>
        <ul>{this.renderAdmins(this.props.admins)}</ul>
      </div>
    );
  }
}

const mapStateToProps = ({ admins }) => {
  return { admins };
};
export default {
  Component: connect(mapStateToProps, { fetchAdmins })(AdminsListPage),
  loadData: ({ dispatch }) => dispatch(fetchAdmins()),
};
