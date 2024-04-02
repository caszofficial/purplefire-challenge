import { Box, Typography, useMediaQuery, useTheme } from "@mui/material";
import React from "react";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";

const ProductCard1 = () => {
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
              backgroundColor: "#12A05C",
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
            NEW
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
              <FavoriteIcon sx={{ color: "#E73C17", fontSize: "10px" }} />
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
            src="https://s3-alpha-sig.figma.com/img/6e53/5a40/b110dc836cd10847d947f62021749ee5?Expires=1713139200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=LpbokoTbJ~oe1T6qli8ZDLK1xUfFnnaKc2bAJV0Rx4U976RUts15odaT1G3MK85X8pKMS9VZymd8QPTdgSvpZWjTicIwyfYi2NU2WSc0uR~J3I~T8WmLz6~aviVgN6-xtzajQIKRb6rLwNRZa1P37c2tIlL4eZC7SBnVuDZtGmPC3ss3cG~wOdDTeecC3K6QQuGksQhndXrrvkw0y4L2cVWyc2lF9TCP96aQ9Mr~yZ8m5EWEhOt5g4GyNxNjiKmYeWmIMWxNA~FfhjkT5SBm6bUNraRo~3Y~KjPkserFCbiydUIDyfdHJeL4nknAngBe2mMIj1S90c6z8ub9M2ozSg__"
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
          Sony BRAVIA XR Android Tv
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
          $800.22
          <span
            style={{
              marginLeft: "10px",
              textDecoration: "line-through",
              fontFamily: "Inter",
              fontWeight: 600,
              fontSize: mobile ? "10px" : "20px",
              lineHeight: mobile ? "13px" : "24.2px",
              color: "#D9D9D9",
            }}
          >
            $1000.66
          </span>
        </Typography>
      </Box>
    </Box>
  );
};

export default ProductCard1;
