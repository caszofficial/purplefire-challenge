import { Box, Typography, useMediaQuery, useTheme } from "@mui/material";
import React from "react";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";

const ProductCard4 = () => {
  const theme = useTheme();
  const mobile = useMediaQuery(theme.breakpoints.between("xs", "md"));
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          backgroundColor: "#f1f1f1",
          width: "fit-content",
          height: "fit-content",
          p: 1,
        }}
      >
        <Box
          sx={{
            display: "flex",
            p: 1,
            justifyContent: "space-between",
            alignItems: "top",
            mb: mobile ? "0px" : "50px",
          }}
        >
          <Box
            sx={{
              width: "fit-conten",
              height: "11px",
              backgroundColor: "#7F7CF6",
              color: "#fff",
              fontFamily: "Inter",
              fontWeight: 500,
              fontSize: mobile ? "6px" : "12px",
              lineHeight: "7.2px",
              borderRadius: "100px",
              p: mobile ? "2px 10px" : "2px 10px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            2 Years Warranty
          </Box>
          <Box>
            <Box
              sx={{
                width: "20px",
                height: "20px",
                borderRadius: "50%",
                border: "1px solid #D7D7D7",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <FavoriteIcon sx={{ color: "#D7D7D7", fontSize: "10px" }} />
            </Box>
          </Box>
        </Box>
        <Box
          sx={{ display: "flex", justifyContent: "center", mb: mobile ? 0 : 4 }}
        >
          <Box
            component="img"
            width={mobile ? "120px" : "250px"}
            height={mobile ? "100px" : "150px"}
            sx={{
              objectFit: "cover",
            }}
            src="https://s3-alpha-sig.figma.com/img/584d/2b65/05c89a5149c2b780ea85f0b2cc9c26a4?Expires=1713139200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=fK~kYowQcurrkwULbsKFYnMJCKpHQ8pIQpDB3lsUlp7trkMQtPGWQtsiJIS6qo3ywaylokGll-vMK0z6MKb4kLI0poGlzHrNRiicbdabr8qJdOjbViqnT3z2MMT4rHqj-yoOeEetT9gOnJSa~S8wAkSaNSQIe-2uII~iLHBdGHHsXSgjXt2EX-9A~sW2JnXz2YycSpdH34KdZ8Q1VBh1JZ7mlLfjpU7koHw5GSEdDroVj1AeZZWRdyUKVdcVeyZ~SisrINPbTWEq~Yzs-PLaIn-7cQbEbOzQhvO13lXk~Vea8ZpBnhCZ7Rk7hzubaLuZ6QCQDxiebODS2Ca5TXSTFw__"
          />
        </Box>
        <Box
          sx={{ display: "flex", justifyContent: "center", mb: mobile ? 0 : 4 }}
        >
          <button
            style={{
              border: "none",
              backgroundColor: "#fff",
              color: "#6F6f6F",
              padding: "10px 30px",
            }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <ShoppingCartOutlinedIcon
                sx={{ fontSize: mobile ? "10px" : "18px", mr: 1 }}
              />
              <Typography
                sx={{
                  fontFamily: "Inter",
                  fontWeight: 500,
                  fontSize: mobile ? "8px" : "18px",
                  lineHeight: mobile ? "10px" : "21.7px",
                }}
              >
                Add to cart
              </Typography>
            </Box>
          </button>
        </Box>
      </Box>
      <Box>
        <Typography
          sx={{
            fontFamily: "Inter",
            fontWeight: 400,
            fontSize: mobile ? "11px" : "20px",
            lineHeight: mobile ? "13px" : "24.2px",
            mt: 2,
            color: "#191919",
          }}
        >
          TCL Roku Android Tv
        </Typography>
        <br />
        <Typography
          sx={{
            fontFamily: "Inter",
            fontWeight: 600,
            fontSize: mobile ? "12px" : "20px",
            lineHeight: mobile ? "14.5px" : "4.2px",
            color: "#191919",
            textAlign: "center",
          }}
        >
          $800.00
        </Typography>
      </Box>
    </Box>
  );
};

export default ProductCard4;
