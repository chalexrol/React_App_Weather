import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import  MainForm from './Components/MainForm'
import AddNewPlace from './Components/AddNewPlace';
import { ShowMore } from './Components/ShowMore';

class App extends Component {
  render() {
    return (
      <div>
        <Router>
         <Switch>
            <Route exact path="/" component={MainForm} />
            <Route path="/new" component={AddNewPlace} />
            <Route path="/long/:zipId&cnt=:day" component={ShowMore} match={{params:['zipId','day']}} /> 
            <Route>
               <h1>Have no any match 404!</h1>
            </Route>
            </Switch>
        </Router>
      </div>
    );
  }
}

export default App;