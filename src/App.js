import React, { Component } from 'react';
import { Route } from "react-router-dom"

import { Auth, Home } from "pages";

class App extends Component {
  render(){
    return <div className="wrapper">
      <Route exact path={["/", "/login"]} component={Auth} />
      <Route exact path="/home" component={Home} />
    </div>;
  }
}

export default App;