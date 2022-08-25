import React from 'react';
import { renderRoutes } from 'react-router-config';
import Header from './components/Header';
const App = ({ route }) => {
  return (
    <div>
      <Header />
      <div>{renderRoutes(route.routes)}</div>
    </div>
  );
};

export default {
  component: App,
};
