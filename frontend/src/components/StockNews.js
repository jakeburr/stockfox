import React, { Fragment } from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  CardText,
  Button,
  CardFooter
} from "reactstrap";

const StockNews = props => {
  const { news, style } = props;

  const newsCards = news.map(data => (
    <Card style={style}>
      <CardHeader tag="h3">{data.title}</CardHeader>
      <CardBody>
        <small>{data.publishedAt}</small>
        <CardTitle>{data.title}</CardTitle>
        <CardText>{data.content}</CardText>
        <Button href={data.url}>Read More..</Button>
      </CardBody>
      <CardFooter className="text-muted">{data.source.name}</CardFooter>
    </Card>
  ));

  return <Fragment>{newsCards}</Fragment>;
};

export default StockNews;
