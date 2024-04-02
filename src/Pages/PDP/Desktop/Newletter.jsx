import { Box, Typography } from "@mui/material";
import React from "react";
import "../../../index.css";

const Newletter = () => {
  return (
    <Box
      sx={{
        p: "20px 40px",
        backgroundImage:
          "linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(https://s3-alpha-sig.figma.com/img/9bab/d9b2/20b5d149a701044cd87ca337590692a6?Expires=1713139200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=SiOIjwTBza8NvG0IYzmZgkKauRD5Y06kYfZfRp2pi1X1ChWFEFuNifE0qbBU~yqIziA3VUZVl8Sv1bOfSL8lCUutCkDiKGIy2sG2ro4mc-0l2O0Y8IkHbmF-dzjD6i7DgZcyi-W43EMgekGZ-QfuUdvmHPovw9JAlIHc3mWfdOK8CH9wOYbACSo69AOl8CtsGwEMCp82ypC5hrmpPQaUfUuWbdIw08D3dR2F~7TQcC4yknEGZuYORgdSP0iI21IWyuvCxlP9Ha-VnYnfxljNg0NKUB45TYEdcit20u6uQlotKk6Ol2P~qM7YbtCv1xIzl2ZSTkQEKZ8pzbzrkwTVeA__)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <Box sx={{ flex: 1 }}>
          <Typography
            sx={{
              fontFamily: "Inter",
              fontWeight: 500,
              fontSize: "28px",
              lineHeight: "34px",
              color: "#FFFFFF",
            }}
          >
            Join our newsletter and get offers
          </Typography>
          <Typography
            sx={{
              fontFamily: "Inter",
              fontWeight: 400,
              fontSize: "20px",
              lineHeight: "24.2px",
              color: "#FFFFFF",
            }}
          >
            Sign up our newsletter
          </Typography>
        </Box>
        <Box sx={{ display: "flex", flex: 1, justifyContent: "center" }}>
          <input
            type="text"
            placeholder="Enter your email"
            style={{
              border: "none",
              fontFamily: "Inter",
              fontWeight: 400,
              fontSize: "20px",
              lineHeight: "24.2px",
              height: "73px",
              width: "1000%",
              padding: "0px 10px",
              color: "#6F6F6F",
            }}
          />

          <button
            className="buttonSubscribe"
            style={{
              border: "none",
              width: "fit-content",
              height: "73px",
              color: "#fff",
              fontFamily: "Inter",
              fontWeight: 600,
              fontSize: "20px",
              lineHeight: "24,2px",
              padding: "10px 20px",
            }}
          >
            SUBSCRIBE
          </button>
        </Box>
      </Box>
    </Box>
  );
};

export default Newletter;
