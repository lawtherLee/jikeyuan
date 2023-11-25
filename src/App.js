import React, {Component} from 'react';
import {BrowserRouter, Switch, Route} from "react-router-dom";
import Login from "./pages/Login";


class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Switch>
            <Route path={'/login'} component={Login}/>
          </Switch>
        </div>
      </BrowserRouter>
    
    );
    
    
  }
}

export default App;