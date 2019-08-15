import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';

// Importing Components
import Profile from './components/Profile/Profile';

class App extends Component {

  constructor(props) {

    super(props);

    this.state = { 
      
      
      
    };
    
  }
  
  

  render() {

    return (

      <Router>

        <Switch>

            <Route path="/" exact strict component={Profile} />

            <Route exact component={Profile} />

        </Switch>

      </Router>

    );

  }

}

export default App;
