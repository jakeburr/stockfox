import React, { useState, useEffect } from "react";
import axios from "axios";
import { keys } from "../../keys";
import StockNews from "../StockNews";
import Spinner from "./Spinner";

import {
  Row,
  Col,
  Card,
  CardHeader,
  CardTitle,
  CardText,
  CardBody,
  CardFooter,
  Button
} from "reactstrap";

const StockQuote = props => {
  const [quote, setQuote] = useState({});
  const [news, setNews] = useState({});

  const getData = async () => {
    let token = keys.token;
    let apiKey = keys.newsToken;
    let symbol = props.match.params.id;

    try {
      const fetchQuote = await axios
        .get(`https://cloud.iexapis.com/beta/stock/${symbol}/quote`, {
          params: {
            token
          }
        })
        .then(quoteData => {
          setQuote(quoteData.data);
          return axios
            .get("https://newsapi.org/v2/everything", {
              params: {
                q: symbol,
                pageSize: 3,
                apiKey
              }
            })
            .then(newsData => setNews(newsData.data.articles));
        });
      fetchQuote();
    } catch (err) {
      console.log("error");
    }
  };

  console.log(quote);
  console.log(news);

  useEffect(() => {
    getData();
  }, []);

  // Value checker
  const isEmpty = value => {
    return (
      value === undefined ||
      value === null ||
      (typeof value === "object" && Object.keys(value).length === 0) ||
      (typeof value === "string" && value.trim().length === 0)
    );
  };

  return (
    <div>
      {isEmpty(quote) || isEmpty(news) ? (
        <Spinner />
      ) : (
        <Row>
          <Col md={8} lg={8}>
            <Card style={{ margin: "16px" }}>
              <CardHeader style={{ color: "#e55d19" }} tag="h3">
                {quote.companyName}
              </CardHeader>
              <CardBody>
                <CardTitle>
                  {quote.delayedPrice}
                  <small>Delayed price quote from {""}</small>
                </CardTitle>
                <CardText>
                  With supporting text below as a natural lead-in to additional
                  content.
                </CardText>
                <Button>Go somewhere</Button>
              </CardBody>
              <CardFooter className="text-muted">Footer</CardFooter>
            </Card>
          </Col>
          <Col md={4} lg={4}>
            <StockNews style={{ margin: "8px" }} news={news} />
          </Col>
        </Row>
      )}
    </div>
  );
};

export default StockQuote;
