import React, { Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Provider } from "./context";
import "./App.css";

import NavBar from "./components/layout/NavBar";
import NewNavbar from './components/layout/NewNavbar'
import Footer from "./components/layout/Footer";
import Index from "./components/layout/Index";
import StockQuote from "./components/layout/StockQuote";

// New
import Register from './components/authentication/Register'

const App = () => {
  return (
    <Fragment>
      <Provider>
        <Router>
          <NavBar />
          <div className="landing">
            <div className="main">
              <Switch>
                <Route exact path="/" component={Index} />
                <Route exact path='/register' component={Register} />
                <Route exact path="/stockquote/:id" component={StockQuote} />
              </Switch>
            </div>
          </div>
          <Footer />
        </Router>
      </Provider>
    </Fragment>
  );
};

// Change route back from exact index to path = /

export default App;
