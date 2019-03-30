import React, { Component } from "react";
import axios from "axios";
import { keys } from "./keys";

const Context = React.createContext();

export class Provider extends Component {
  // No real reason to use contructor right now
  state = {
    stocks: [],
    heading: "Top Trending Stocks",
    subtitle: "Click to pirate this stock to bits."
  };

  componentDidMount() {
    let token = keys.token;
    axios
      .get(`https://cloud.iexapis.com/beta/stock/market/list/mostactive`, {
        params: {
          token
        }
      })
      .then(res => {
        this.setState({ stocks: res.data });
      })
      .catch(err => console.log(err));
  }
  render() {
    console.log(keys);
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    );
  }
}

export const Consumer = Context.Consumer;
