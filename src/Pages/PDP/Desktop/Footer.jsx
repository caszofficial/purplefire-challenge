import { Box, Divider, Typography } from "@mui/material";
import {
  IconBrandFacebook,
  IconBrandInstagram,
  IconBrandWhatsapp,
  IconBrandYoutube,
  IconDeviceMobile,
  IconMapPin,
} from "@tabler/icons-react";
import React from "react";

const Footer = () => {
  return (
    <Box>
      <Box
        sx={{
          p: "40px",
          backgroundColor: "#2f333A",
          display: "flex",
          gap: "30px",
        }}
      >
        <Box
          sx={{
            fontFamily: "Inter",
            fontWeight: 400,
            fontSize: "18px",
            lineHeight: "30px",
            color: "#fff",
            flex: 1,
            display: "grid",
            gap: "10px",
          }}
        >
          <Typography
            sx={{
              fontFamily: "Inter",
              fontWeight: 500,
              fontSize: "24px",
              lineHeight: "29px",
              mb: 2,
            }}
          >
            ABOUT US
          </Typography>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
            aliquet lacinia nulla ut laoreet. Quisque ultricies et tortor nec
            laoreet.
          </Typography>
          <Box
            sx={{
              display: "flex",
              justifyContent: "left",
              gap: "5px",
            }}
          >
            <IconBrandFacebook />
            <IconBrandInstagram />
            <IconBrandWhatsapp />
            <IconBrandYoutube />
          </Box>
        </Box>
        <Box
          sx={{
            fontFamily: "Inter",
            fontWeight: 400,
            fontSize: "18px",
            lineHeight: "22px",
            color: "#fff",
            flex: 0.5,
            display: "grid",
            gap: "10px",
          }}
        >
          <Typography
            sx={{
              fontFamily: "Inter",
              fontWeight: 500,
              fontSize: "24px",
              lineHeight: "29px",
              mb: 2,
            }}
          >
            INFORMATION
          </Typography>
          <Typography>About</Typography>
          <Typography>Delivery Information</Typography>
          <Typography>Privacy Policy</Typography>
          <Typography>Sales</Typography>
          <Typography>Terms & Conditions </Typography>
          <Typography>EMI Payment</Typography>
        </Box>
        <Box
          sx={{
            fontFamily: "Inter",
            fontWeight: 400,
            fontSize: "18px",
            lineHeight: "22px",
            color: "#fff",
            flex: 0.5,
            display: "grid",
            gap: "10px",
          }}
        >
          <Typography
            sx={{
              fontFamily: "Inter",
              fontWeight: 500,
              fontSize: "24px",
              lineHeight: "29px",
              mb: 2,
            }}
          >
            ACCOUNT
          </Typography>
          <Typography>My Account</Typography>
          <Typography>My Orders</Typography>
          <Typography>Returns</Typography>
          <Typography>Shipping</Typography>
          <Typography>Wishlist</Typography>
          <Typography>Account Details</Typography>
        </Box>
        <Box
          sx={{
            fontFamily: "Inter",
            fontWeight: 400,
            fontSize: "18px",
            lineHeight: "22px",
            color: "#fff",
            flex: 0.5,
            display: "grid",
            gap: "10px",
          }}
        >
          <Typography
            sx={{
              fontFamily: "Inter",
              fontWeight: 500,
              fontSize: "24px",
              lineHeight: "29px",
              mb: 2,
            }}
          >
            STORE
          </Typography>
          <Typography>Affiliate</Typography>
          <Typography>Discounts</Typography>
          <Typography>Sale</Typography>
          <Typography>Contact</Typography>
          <Typography>All Collections</Typography>
        </Box>
        <Box
          sx={{
            fontFamily: "Inter",
            fontWeight: 400,
            fontSize: "18px",
            lineHeight: "22px",
            color: "#fff",
            flex: 1,
            display: "grid",
            gap: "10px",
          }}
        >
          <Typography
            sx={{
              fontFamily: "Inter",
              fontWeight: 500,
              fontSize: "24px",
              lineHeight: "29px",
              mb: 2,
            }}
          >
            CONTACT US
          </Typography>
          <Typography sx={{ lineHeight: "30px", mb: 1 }}>
            If you have any query, please contact us
            <br />
            <span style={{ color: "#E73C17", lineHeight: "30px" }}>
              needus24@gmail.com
            </span>
          </Typography>
          <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
            <IconMapPin sx={{ fontSize: "40px" }} />
            <Typography>California, USA</Typography>
          </Box>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <IconDeviceMobile sx={{ fontSize: "40px" }} />
            <Typography>+12012987481</Typography>
          </Box>
        </Box>
      </Box>
      <Box sx={{ p: 2, backgroundColor: "#2F333A" }}>
        <Divider sx={{ m: "0px 20px", borderColor: "#fff" }} />
      </Box>
      <Box
        sx={{
          p: 8,
          fontFamily: "Inter",
          fontWeight: 400,
          fontSize: "15px",
          lineHeight: "18px",
          color: "#fff",
          textAlign: "center",
          backgroundColor: "#2F333A",
        }}
      >
        <Typography>Copyright. 2023 All Right Reserved</Typography>
      </Box>
    </Box>
  );
};

export default Footer;
