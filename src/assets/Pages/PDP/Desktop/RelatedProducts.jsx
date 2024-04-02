import { Box, Typography } from "@mui/material";
import React from "react";
import ProductCard1 from "../ProductCards/ProductCard1";
import ProductCard2 from "../ProductCards/ProductCard2";
import ProductCard3 from "../ProductCards/ProductCard3";
import ProductCard4 from "../ProductCards/ProductCard4";

const RelatedProducts = () => {
  return (
    <Box sx={{ p: "100px 20px" }}>
      <Box>
        <Typography
          sx={{
            textAlign: "center",
            fontFamily: "Inter",
            fontWeight: 500,
            fontSize: "32px",
            lineHeight: "39px",
            color: "#191919",
            mb: 4,
          }}
        >
          Related Products
        </Typography>
      </Box>
      <Box sx={{ display: "flex", justifyContent: "space-evenly" }}>
        <ProductCard1 />
        <ProductCard2 />
        <ProductCard3 />
        <ProductCard4 />
      </Box>
    </Box>
  );
};

export default RelatedProducts;
