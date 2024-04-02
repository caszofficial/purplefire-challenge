import { Box, Typography, useMediaQuery, useTheme } from "@mui/material";
import React from "react";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";

const ProductCard3 = () => {
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
            mb: "50px",
          }}
        >
          <Box
            sx={{
              width: "31px",
              height: "11px",
              backgroundColor: "#FF9900",
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
            HOT
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
        <Box sx={{ display: "flex", justifyContent: "center", mb: 4 }}>
          <Box
            component="img"
            width={mobile ? "120px" : "250px"}
            height={mobile ? "100px" : "150px"}
            sx={{
              objectFit: "cover",
            }}
            src="https://s3-alpha-sig.figma.com/img/2ef7/70f1/238ed7ff00c2109bf48a032f093d5cb1?Expires=1713139200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ZUjbBaeSkoD5-AELOPcZTq9-QAd7RE6i66-yyjk7EUumdUCZu6HiGLX0E5sO0BBKAURsgn8fPDtZyDvLm-6Bv4Mj-ln62JMi-AjpGBb~4k8xg3Ql7RSiWKhpczvht0iSYp8~d2uP1905HZYIKXQz1ThtpodDMNHtXBEtKsmgv8K~4VK120xH7bt9PuW2KPzhGQDgSJOk3OzdOFIHHZfWCGTBQZCyruOeVdaiHDwts1UX61Xq4EF8QImQkjpzfGuCAoMe7VNjKxshcsXqbZWXRZHUuFV80LYkCOqUnuEdmrFu409a8-O5RZN9Coaw0yH-k5TCT3rhZwko1BN39oeWYw__"
          />
        </Box>
        <Box sx={{ display: "flex", justifyContent: "center", mb: 4 }}>
          <button
            className="buttonCart"
            style={{
              border: "none",
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
          Konka OLED Android Tv
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
          $700.00
        </Typography>
      </Box>
    </Box>
  );
};

export default ProductCard3;
