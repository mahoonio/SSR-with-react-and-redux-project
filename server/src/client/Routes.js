import React from 'react';
import HomePage from './pages/HomePage';
import UsersListPage from './pages/UsersListPage';
// syntax for using react-router-config which is a subpackage of react-router
// for server side rendering purposes.(deciding which components we want to show without rendering the app)
export default [
  {
    ...HomePage,
    path: '/',
    exact: true,
  },
  { ...UsersListPage, path: '/users' },
];
