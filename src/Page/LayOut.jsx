import React from "react";
import NavBarLogin from "../Components/Uitily/NavBarLogin";
import { Outlet } from "react-router-dom";
import Footer from "../Components/Uitily/Footer";

const LayOut = () => {
  return (
    <div className="font">
      <NavBarLogin />
      <Outlet />
      <Footer />
    </div>
  );
};

export default LayOut;
