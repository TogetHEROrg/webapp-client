import React from 'react'
import './App.css'

import Login from './Login'
import Buttons from './Buttons'

import { BrowserRouter as Router, Route} from "react-router-dom"

const App = () => {
  return <Router>
      <Route path="/" exact component={Login} />
      <Route path="/Buttons" exact component={Buttons} />
    </Router>
}

export default App
