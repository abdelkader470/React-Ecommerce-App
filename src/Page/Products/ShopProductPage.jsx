import React from "react";
import CategoryHeader from "../../Components/Category/CategoryHeader";
import SearchCountResult from "../../Components/Uitily/SearchCountResult";
import { Col, Container, Row } from "react-bootstrap";
import SideFilter from "../../Components/Uitily/SideFilter";
import CardProductContainer from "../../Components/Products/CardProductContainer";
import Pagination from "../../Components/Uitily/Pagination";

const ShopProductPage = () => {
  return (
    <div style={{ minHeight: "670px" }}>
      <CategoryHeader />
      <Container>
        <SearchCountResult title=" 400 نتيجة بحث" />
        <Row className="d-flex flex-row">
          <Col sm="2" xs="2" md="2" className="d-flex">
            <SideFilter />
          </Col>
          <Col sm="10" xs="10" md="10">
            <CardProductContainer />
          </Col>
        </Row>
        <Pagination />
      </Container>
    </div>
  );
};

export default ShopProductPage;
