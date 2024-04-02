import { Box, Typography } from "@mui/material";
import React from "react";

const Banner = () => {
  return (
    <Box sx={{ p: "40px 0px", backgroundColor: "#F4F5F8" }}>
      <Typography
        sx={{
          fontFamily: "Inter",
          fontWeight: 500,
          fontSize: "40px",
          lineHeight: "49px",
          textAlign: "center",
          color: "#191919",
        }}
      >
        TV COLLECTION
      </Typography>
      <Typography
        sx={{
          fontFamily: "Inter",
          fontWeight: 300,
          fontSize: "18px",
          lineHeight: "32px",
          letterSpacing: "20%",
          textAlign: "center",
          color: "#191919",
        }}
      >
        HOME / PRODUCT / TV COLLECTION
      </Typography>
    </Box>
  );
};

export default Banner;
