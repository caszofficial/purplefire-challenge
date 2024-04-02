import { Box, Divider, Typography } from "@mui/material";
import React from "react";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";

const Header = () => {
  return (
    <Box sx={{ display: "flex", p: 4, alignItems: "center" }}>
      <Box sx={{ display: "flex", flex: 1 }}>
        <Typography
          sx={{
            fontFamily: "Inconsolata",
            fontWeight: 700,
            fontSize: "48px",
            lineHeight: "50px",
            color: "#191919",
          }}
        >
          Needus
          <span
            style={{
              fontFamily: "Inconsolata",
              fontWeight: 700,
              fontSize: "48px",
              lineHeight: "50px",
              color: "#E73C17",
            }}
          >
            .
          </span>
        </Typography>
      </Box>
      <Box
        sx={{
          border: "1px solid #F0F0F0",
          p: "5px",
          display: "flex",
          alignItems: "center",
        }}
      >
        <Box sx={{ display: "flex" }}>
          <input
            type="text"
            placeholder="Search Products"
            style={{
              border: "none",
              fontFamily: "Inter",
              fontWeight: 300,
              fontSize: "20px",
              lineHeight: "24px",
              color: "#969696",
              padding: "0 40px",
            }}
          />
          <Box
            sx={{
              width: "63px",
              height: "63px",
              backgroundColor: "#2F333A",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              color: "#fff",
            }}
          >
            <SearchOutlinedIcon />
          </Box>
        </Box>
      </Box>
      <Box
        sx={{
          border: "1px solid #F0F0F0",
          p: "5px 20px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          height: "63px",
          flex: 1,
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Typography
            sx={{
              fontFamily: "Inter",
              fontWeight: 300,
              fontSize: "20px",
              lineHeight: "24px",
              color: "#191919",
            }}
          >
            All Categories
          </Typography>
          <KeyboardArrowDownOutlinedIcon sx={{ fontSize: "24px" }} />
        </Box>
        <Box
          sx={{
            display: "flex",
            fontSize: "20px",
            fontFamily: "Inter",
            fontWeight: 300,
            color: "#191919",
          }}
        >
          <Typography>Login</Typography>
          <Divider flexItem orientation="vertical" sx={{ m: "0 10px" }} />
          <Typography>Signup</Typography>
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          p: 4,
        }}
      >
        <FavoriteBorderOutlinedIcon sx={{ mr: 2 }} />
        <ShoppingCartOutlinedIcon />
      </Box>
    </Box>
  );
};

export default Header;
