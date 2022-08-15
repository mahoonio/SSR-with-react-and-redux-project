import React from 'react';
import Home from './components/Home';
import UsersList from './components/UsersList';
// syntax for using react-router-config which is a subpackage of react-router
// for server side rendering purposes.(deciding which components we want to show without rendering the app)
export default [
  {
    path: '/',
    component: Home,
    exact: true,
  },
  {
    path: '/users',
    component: UsersList,
  },
];
