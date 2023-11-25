import React, {Component} from 'react';
import {BrowserRouter} from "react-router-dom";
import Route from "react-router-dom/es/Route";
import Login from "./pages/Login";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Route path={'/login'} component={Login}/>
        </div>
      </BrowserRouter>
    
    );
    
    
  }
}

export default App;