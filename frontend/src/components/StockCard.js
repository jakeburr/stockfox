import React from "react";
import { Link } from "react-router-dom";

import { Col, Card } from "react-bootstrap";

const StockCard = props => {
  const { stock } = props;

  return (
    <Col md={6}>
      <div className="card mb-4 h-250 shadow-sm">
        <div className="card-body">
          <h5>{stock.symbol}</h5>
          <p className="card-text">
            <strong>
              <i
                className="fas fa-info-circle fa-2x"
                style={{ color: "blue" }}
              />{" "}
              {stock.companyName}
            </strong>
            <hr />
            {stock.change > 0 ? (
              <strong>
                <i
                  className="fas fa-arrow-up fa-2x"
                  style={{ color: "green" }}
                />{" "}
                ${stock.latestPrice}
              </strong>
            ) : (
              <strong>
                <i
                  className="fas fa-arrow-down fa-2x"
                  style={{ color: "red" }}
                />{" "}
                ${stock.latestPrice}
              </strong>
            )}
          </p>
          <Link
            to={`stocks/${stock.symbol}`}
            className="btn btn-dark btn-block"
          >
            <i className="fas fa-chevron-right" />
            View Stock
          </Link>
        </div>
      </div>
    </Col>
  );
};

export default StockCard;
