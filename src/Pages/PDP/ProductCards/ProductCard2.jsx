import { Box, Typography, useMediaQuery, useTheme } from "@mui/material";
import React from "react";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";

const ProductCard2 = () => {
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
              width: "31px",
              height: "11px",
              backgroundColor: "#E73C17",
              color: "#fff",
              fontFamily: "Inter",
              fontWeight: 500,
              fontSize: mobile ? "6px" : "12px",
              lineHeight: "7.2px",
              borderRadius: "100px",
              p: mobile ? "2px 0px" : "2px 10px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            -10%
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
            src="https://s3-alpha-sig.figma.com/img/7357/4613/29c35016c0cd56a53b5d326cfe3de2da?Expires=1713139200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ENVLIpZekE9ismW2hxVhnCJgw1FHWRCgckh0TwEkRbUr1n7n9Fwpg9x4LPgg8rEWNZLh-CiKZWfHryZ0R6tAGDfvBmNrnruUhCykk0IF26v7xDM5g7RQdcVIOJvH-y9472YOitoYmksc4Q5Zq8Uyc4CsA5HtRkRB9yn9KUrNbZrUSeT7V13oiXFwtR5mbdcNFGQ1YskTqvNeTGk09gXbXYI-qyIWVX1g59OTKxLbPHWAsAi6ii5nLwt7gB0RlH6OKWK4LtXEM-3YtH8oG6BGU4iALswfuThqZ~s~0n2FrGinT4SBIc~d24PdIKdsoItK7La12x5lci9y2gYf3b-AOA__"
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
          Mi P1 Smart Android HD TV
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
          $400.00
        </Typography>
      </Box>
    </Box>
  );
};

export default ProductCard2;
