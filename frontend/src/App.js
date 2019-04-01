import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Provider } from "./context";
import { Container } from "react-bootstrap";
import "./App.css";

import NavBar from "./components/layout/NavBar";
import Footer from "./components/layout/Footer";
import Index from "./components/layout/Index";
import StockQuote from "./components/layout/StockQuote";

class App extends Component {
  render() {
    return (
      <Provider>
        <Router>
          <NavBar />
          <div className="landing">
            <Container className="main">
              <Switch>
                <Route exact path="/" component={Index} />
                <Route exact path="/stockquote/:id" component={StockQuote} />
              </Switch>
            </Container>
          </div>
          <Footer />
        </Router>
      </Provider>
    );
  }
}

// Change route back from exact index to path = /

export default App;
