import React, { createElement } from 'react';
import './App.css';

import Login from './pages/login';
import Dashboard from './pages/dashboard';

import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';

const App = () => {
  const accessToken = localStorage.getItem('access_token');
  return (
    <Router>
      <Route path="*" render={() => <Redirect to="/dashboard" />} />
      <Route
        path="/dashboard"
        render={props => (accessToken ? createElement(Dashboard, props) : <Redirect to="/login" />)}
      />
      <Route path="/login" exact component={Login} />
    </Router>
  );
};

export default App;
