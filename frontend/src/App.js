import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Provider } from "./context";
import { Container } from 'react-bootstrap'
import "./App.css";

import NavBar from "./components/layout/NavBar";
import Index from "./components/layout/Index";

class App extends Component {
  render() {
    return (
      <Provider>
        <Router>
          <NavBar />
          <div className="landing">
            <Container fluid >
            <Switch>
                <Route exact path="/" component={Index} />
              </Switch>
            </Container>
            </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
