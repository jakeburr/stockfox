import React from 'react'
import { Consumer } from "../context";
import Spinner from "./layout/Spinner";
import { Row } from "reactstrap";

import StockCard from "./StockCard";

const Trending = () => {
    return (
      <Consumer>
        {value => {
          const { stocks, heading } = value;
          console.log(value);
          if (stocks === undefined || stocks.length === 0) {
            return <Spinner />;
          } else {
            return (
              <React.Fragment>
                <h3 className="text-center mb-4" style={{ fontSize: "2.5rem" }}>
                  {heading}
                </h3>
                <Row>
                  {stocks.map(stock => (
                    <StockCard key={stock.symbol} stock={stock} />
                  ))}
                </Row>
              </React.Fragment>
            );
          }
        }}
      </Consumer>
    );

}

export default Trending;
