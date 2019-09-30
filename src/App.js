import React from 'react';
import { BrowserRouter as Router, Route} from "react-router-dom";
import './App.css';

//Pages
import Login from './components/FormContainer'
import Button from './components/Button'

const App = () => {
  return <Router>
    <Route path="/" exact component={Login}/>
    <Route path="/buttons" exact component={Button}/>
    
  </Router>

      

}

export default App
