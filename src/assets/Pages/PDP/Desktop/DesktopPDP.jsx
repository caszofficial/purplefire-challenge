import { Box } from "@mui/material";
import React from "react";
import PreHeader from "./PreHeader";
import Header from "./Header";
import Menu from "./Menu";
import Banner from "./Banner";
import ProductDisplay from "./ProductDisplay";
import ProductDetailsTabs from "./ProductDetailsTabs";
import RelatedProducts from "./RelatedProducts";
import Newletter from "./Newletter";
import Footer from "./Footer";

const DesktopPDP = () => {
  return (
    <Box>
      <PreHeader />
      <Header />
      <Menu />
      <Banner />
      <ProductDisplay />
      <ProductDetailsTabs />
      <RelatedProducts />
      <Newletter />
      <Footer />
    </Box>
  );
};

export default DesktopPDP;
