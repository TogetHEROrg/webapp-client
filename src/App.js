import React from 'react';
import { BrowserRouter as Router, Route} from "react-router-dom";
import './App.css';

//Pages
import Form from './components/FormContainer'
import Button from './components/Button'

const App = () => {
  return <Router>
    <Route path="/" exact component={Button}/>
    <Route path="/login" exact component={Form}/>
  </Router>

      

}

export default App
