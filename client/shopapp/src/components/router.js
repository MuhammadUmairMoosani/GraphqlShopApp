import React, { Component } from 'react';
import { BrowserRouter as Router, Route} from "react-router-dom";
import Nav from './nav';
import {
    Jeans,
    Tshirt,
    Sunglasses,
    Home,
    AddItems
} from './contant';

class ReactRouter extends Component {
  render() {
    return (
        <Router>
        <div>
          <Nav/>
          <Route path="/" exact component={Home} />
          <Route path="/jeans"  component={Jeans} />
          <Route path="/t-shirt" component={Tshirt} />
          <Route path="/sunglasses" component={Sunglasses} />
          <Route path="/add-items" component={AddItems} />
        </div>
      </Router>
    );
  }
}

export default ReactRouter;