import React from "react";
import { Container, Row } from "react-bootstrap";
import SubTitle from "../Uitily/SubTitle";
import ProductCard from "./ProductCard";

const CardProductContainer = ({ title, btntitle }) => {
  return (
    <Container>
      <SubTitle title={title} btntitle={btntitle} pathText="products" />
      <Row className="my-2 d-flex justify-content-between">
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </Row>
    </Container>
  );
};

export default CardProductContainer;
