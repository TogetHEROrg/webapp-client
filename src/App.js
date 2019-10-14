import React, { createElement } from 'react';
import './App.css'

import Login from './Login'
import Buttons from './Buttons'

import { BrowserRouter as Router, Route, Redirect} from "react-router-dom"

const App = () => {
  const accessToken = localStorage.getItem('access_token');
  return <Router>
      <Route path="*" render={(props)=> <Redirect to="/Buttons" />}/>
      <Route path="/Buttons" render={(props)=> accessToken ? createElement(Buttons,props): <Redirect to="/Login" />} />
      <Route path="/Login" exact component={Login} />
    </Router>
}

export default App
