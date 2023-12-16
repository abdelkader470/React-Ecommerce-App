import React from "react";
import CategoryHeader from "../../Components/Category/CategoryHeader";
import { Container } from "react-bootstrap";
import ProductDetails from "../../Components/Products/ProductDetails";
import RateContainer from "../../Components/Rate/RateContainer";
import CardProductContainer from "../../Components/Products/CardProductContainer";

const ProductDetailsPage = () => {
  return (
    <div style={{ minHeight: "670px" }}>
      <CategoryHeader />
      <Container>
        <ProductDetails />
        <RateContainer />
        <CardProductContainer title="منتجات قد تعجبك" />
      </Container>
    </div>
  );
};

export default ProductDetailsPage;
