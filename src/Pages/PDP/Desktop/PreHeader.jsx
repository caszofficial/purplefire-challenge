import { Box, Divider, Typography } from "@mui/material";
import React from "react";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";

const PreHeader = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#2F333A",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        p: 2,
      }}
    >
      <Box>
        <Typography sx={{ color: "#fff" }}>
          Welcome to Needus & Get the best product
        </Typography>
      </Box>
      <Box sx={{ display: "flex" }}>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Typography sx={{ color: "#fff" }}>ENG</Typography>
          <KeyboardArrowDownOutlinedIcon
            sx={{ fontSize: "20px", color: "#fff" }}
          />
        </Box>
        <Divider
          orientation="vertical"
          flexItem
          sx={{ m: "0 10px", borderColor: "#fff" }}
        />
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Typography sx={{ color: "#fff" }}>USD</Typography>
          <KeyboardArrowDownOutlinedIcon
            sx={{ fontSize: "20px", color: "#fff" }}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default PreHeader;
