import React from "react";
import SubTitle from "../Uitily/SubTitle";
import { Container, Row } from "react-bootstrap";
import CategoryCard from "./CategoryCard";
import clothe from "../../images/clothe.png";
import cat2 from "../../images/cat2.png";
import labtop from "../../images/labtop.png";
import sale from "../../images/sale.png";
import pic from "../../images/pic.png";
const CategoryContainer = () => {
  return (
    <Container>
      <SubTitle title="كل التصينفات" />
      <Row className="my-2 d-flex justify-content-between">
        <CategoryCard title="ملابس" img={clothe} background="#F4DBA4" />
        <CategoryCard title="مستحضرات تجميل" img={cat2} background="#F4DBA4" />
        <CategoryCard title="لابتوب" img={labtop} background="#0034FF" />
        <CategoryCard title="نخفيضات" img={sale} background="#F4DBA4" />
        <CategoryCard title="نخفيضات" img={sale} background="#F4DBA4" />
        <CategoryCard title="ملابس" img={clothe} background="#FF6262" />
        <CategoryCard title="ادوات مطبخ" img={pic} background="#F4DBA4" />
        <CategoryCard title="لابتوب" img={labtop} background="#0034FF" />
        <CategoryCard title="نخفيضات" img={sale} background="#F4DBA4" />
        <CategoryCard title="نخفيضات" img={sale} background="#F4DBA4" />
        <CategoryCard title="ملابس" img={clothe} background="#F4DBA4" />
        <CategoryCard title="مستحضرات تجميل" img={cat2} background="#F4DBA4" />
      </Row>
    </Container>
  );
};

export default CategoryContainer;
