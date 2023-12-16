import React from "react";
import Silder from "../../Components/Home/Silder";
import HomeCategory from "../../Components/Home/HomeCategory";
import CardProductContainer from "../../Components/Products/CardProductContainer";
import DiscountSection from "../../Components/Home/DiscountSection";
import BrandFeature from "../../Components/Brand/BrandFeature";

const HomePage = () => {
  return (
    <div className="font" style={{ minHeight: "670px" }}>
      <Silder />
      <HomeCategory />
      <CardProductContainer
        title="الاكثر مبيعا"
        btntitle="المزيد"
        pathText="product"
      />
      <DiscountSection />
      <CardProductContainer
        title="احداث الازياء"
        btntitle="المزيد"
        pathText="product"
      />
      <BrandFeature title="اشهر الماركات" btntitle="المزيد" />
    </div>
  );
};

export default HomePage;
