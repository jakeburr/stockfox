import React, { Component } from "react";
import axios from "axios";
import { keys } from "../../keys";
import StockNews from "../StockNews";
import Spinner from "./Spinner";

class StockQuote extends Component {
  state = {
    quote: {},
    news: []
  };

  getData = async () => {
    let token = keys.token
    let apiKey = keys.newsToken
    let symbol = this.props.match.params.id

    try{
      const fetchQuote = await axios.get(`https://cloud.iexapis.com/beta/stock/${symbol}/quote`, {
        params: {
          token
        }
      }).then(quote => {
        this.setState({quote: quote.data});
        return axios.get('https://newsapi.org/v2/everything', {
          params: {
            q: symbol,
            pageSize: 5,
            apiKey
          }
        }).then(news => this.setState({news: news.data.articles}))
      })
      fetchQuote();
    }catch(err){
      console.log('error')
    }
  }

  componentDidMount() {
    this.getData();
  }

  // Value checker
  isEmpty = value => {
    return (
      value === undefined ||
      value === null ||
      (typeof value === "object" && Object.keys(value).length === 0) ||
      (typeof value === "string" && value.trim().length === 0)
    );
  };

  render() {
    const { quote, news } = this.state;
    return (
      <div>
        {this.isEmpty(quote) || this.isEmpty(news) ? (
          <Spinner />
        ) : (
          <StockNews news={news} />
        )}
      </div>
    );
  }
}

export default StockQuote;
