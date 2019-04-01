import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";

const StockCard = props => {
  const { stock } = props;
  return (
    <Col md={6}>
      <div className="card mb-4 h-250 shadow-sm">
        <div className="card-body">
          <h4
            style={{
              textAlign: "center",
              color: "#e55d19",
              fontWeight: "bold"
            }}
          >
            {stock.companyName}
          </h4>
          <hr />
          <Container>
            <Row>
              <Col>
                <h5 style={{ textAlign: "center", fontWeight: "bold" }}>
                  Price:
                </h5>
                <h5 className="card-text" style={{ textAlign: "center" }}>
                  {stock.change > 0 ? (
                    <p
                      style={{
                        display: "inline",
                        textAlign: "center",
                        fontWeight: "bold",
                        alignItems: "center",
                        justifyContent: "center",
                        fontSize: "1.25rem"
                      }}
                    >
                      <i
                        className="fas fa-arrow-up fa-1x"
                        style={{ color: "green" }}
                      />{" "}
                      ${stock.latestPrice}
                    </p>
                  ) : (
                    <p
                      style={{
                        display: "inline",
                        textAlign: "center",
                        fontWeight: "bold",
                        alignItems: "center",
                        justifyContent: "center",
                        fontSize: "1.25rem"
                      }}
                    >
                      <i
                        className="fas fa-arrow-down fa-1x"
                        style={{ color: "#e20606" }}
                      />{" "}
                      ${stock.latestPrice}
                    </p>
                  )}
                </h5>
              </Col>
              <Col>
                <table className="table table-sm">
                  <tbody>
                    <tr>
                      <td>High:</td>
                      <td style={{ fontWeight: "bold" }}>${stock.high}</td>
                    </tr>
                    <tr>
                      <td style={{}}>Low:</td>
                      <td style={{ fontWeight: "bold" }}>${stock.low}</td>
                    </tr>
                  </tbody>
                </table>
              </Col>
            </Row>
          </Container>
          <Link
            to={`/stockquote/${stock.symbol}`}
            className="btn btn-dark btn-block"
          >
            <i className="fas fa-chevron-right" /> View Stock
          </Link>
        </div>
      </div>
    </Col>
  );
};

export default StockCard;
