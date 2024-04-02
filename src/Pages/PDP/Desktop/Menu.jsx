import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";
import ListOutlinedIcon from "@mui/icons-material/ListOutlined";
import { Box, Typography } from "@mui/material";
import React from "react";

const Menu = () => {
  return (
    <Box sx={{ display: "flex" }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-evenly",
          alignItems: "center",
          backgroundColor: "#E73C17",
          p: 2,
          color: "#fff",
          flex: 0.5,
        }}
      >
        <ListOutlinedIcon />
        <Typography>All Categories</Typography>
        <KeyboardArrowDownOutlinedIcon />
      </Box>

      <Box
        sx={{
          display: "flex",
          justifyContent: "space-evenly",
          flex: 1,
          backgroundColor: "#2F333A",
          p: "0 50px",
          color: "#fff",
          fontFamily: "Inter",
          fontWeight: 400,
          fontSize: "16px",
          borderRight: "1px solid #fff",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Typography>HOME</Typography>
          <KeyboardArrowDownOutlinedIcon />
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Typography>ABOUT</Typography>
          <KeyboardArrowDownOutlinedIcon />
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Typography>PRODUCT</Typography>
          <KeyboardArrowDownOutlinedIcon />
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Typography>PAGES</Typography>
          <KeyboardArrowDownOutlinedIcon />
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Typography>CONTACT</Typography>
          <KeyboardArrowDownOutlinedIcon />
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          backgroundColor: "#2F333A",
          justifyContent: "space-evenly",
          p: "0 20px",
          flex: 0.5,
        }}
      >
        <img
          width="40px"
          height="40px"
          src="https://s3-alpha-sig.figma.com/img/ef2d/5dc7/6dc5b7197182a4d884080acf7924f348?Expires=1713139200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=On8AZXHn9XtVxxcRT-F35Ev5yBzejRHNOJDL3fKWAPcr4Gfpw0imD8u1RnddvKrThOBD1NE5HE-2L1uUfcMmiucrIGFJO2gFCzTckTk6zcNl31yvyyqRT37~hBXvSmRSpa84HtHiQmTlVP5QaDgTEti15QN8lIGKp5UbdCG7c4dKYVYY4N-if7HUKSOD54YRon8c4UiaIOwIw2grwdatSFgVbMPqxBvd~BkZTya38GeDpoVUmk8UXdKC74CCemZa5X-F-yGqh~IrZlrXKa9x4PHCjwG1L8DGTzg56k91xRIn5sIKT8apDX3Rxgd2yNS9g92-nAUur-TZObKO5zZ0uw__"
          alt="Not Found"
        />
        <Box>
          <Typography
            sx={{
              fontFamily: "Inter",
              fontWeight: 300,
              fontSize: "15px",
              lineHeight: "18px",
              color: "#fff",
              textAlign: "center",
            }}
          >
            Contact Us 24/7
          </Typography>
          <Typography
            sx={{
              fontFamily: "Inter",
              fontWeight: 500,
              fontSize: "18px",
              lineHeight: "22px",
              color: "#fff",
              textAlign: "center",
            }}
          >
            +12012987481
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Menu;
