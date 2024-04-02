import { TabContext, TabList, TabPanel } from "@mui/lab";
import { Box, Divider, Tab, Typography } from "@mui/material";
import React, { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import ReorderOutlinedIcon from "@mui/icons-material/ReorderOutlined";
import ArrowBackIosNewOutlinedIcon from "@mui/icons-material/ArrowBackIosNewOutlined";
import { ArrowForwardIosOutlined } from "@mui/icons-material";
import StarIcon from "@mui/icons-material/Star";
import ProductCard1 from "./ProductCards/ProductCard1";
import ProductCard2 from "./ProductCards/ProductCard2";

const MobilePDP = () => {
  const [value, setValue] = useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          p: 2,
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "#E73C17",
            width: "40px",
            height: "40px",
            color: "#fff",
          }}
        >
          <ReorderOutlinedIcon fontSize="medium" />
        </Box>
        <Box sx={{ position: "relative", left: "30px" }}>
          <Typography
            sx={{
              fontFamily: "Inter",
              fontWeight: 600,
              fontSize: "16px",
              lineHeight: "19px",
            }}
          >
            Needus
            <span
              style={{
                color: "#E73C17",
              }}
            >
              .
            </span>
          </Typography>
        </Box>
        <Box sx={{ color: "#000" }}>
          <SearchIcon fontSize="small" sx={{ m: "0 2px" }} />
          <AccountCircleOutlinedIcon fontSize="small" sx={{ m: "0 2px" }} />
          <FavoriteBorderOutlinedIcon fontSize="small" sx={{ m: "0 2px" }} />
          <ShoppingCartOutlinedIcon fontSize="small" sx={{ m: "0 2px" }} />
        </Box>
      </Box>
      <Box sx={{ backgroundColor: "#F4F5F8", p: 2, textAlign: "center" }}>
        <Typography
          sx={{
            fontFamily: "Inter",
            fontWeight: 500,
            fontSize: "18px",
            lineHeight: "22px",
            color: "#191919",
          }}
        >
          TV COLLECTION
        </Typography>
        <Typography
          sx={{
            fontFamily: "Inter",
            fontWeight: 300,
            fontSize: "10px",
            lineHeight: "12px",
            color: "#191919",
          }}
        >
          HOME / PRODUCT / TV / COLLECTION
        </Typography>
      </Box>
      <Box
        sx={{
          backgroundColor: "#fff",
          p: 2,
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Box
          component="img"
          src="https://s3-alpha-sig.figma.com/img/28ba/45f6/86b94896d9ea4225ea4cf6b97999c13c?Expires=1713139200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=SEj5bp3zt848tWc53kGJx3kuXogau-XS2mFrD04tH3Xc2ymvn-RMObDqy3n7vsUd-P~ZLo6zDGcjE05lPbGUDv1k35XMbHNWw1rgQPRLLIPQLr2CFI24agWIGoiTjocxIeWEj4HngB1PQzRutTUPqkTMHsOdsCjkpj0Cr0iJSNU~oxkQk5Ob5BaNwYcyYS3Ayar0huY~iDWLXqEQ26EGBbcYIKpS9vgjuTI5xyuklrD2BX1AX96~7SedjLRp-UxFf4QmZxjo1PrBVcBPG9KYPTYtYu~FtaFZeY6dKpYlEi2QFIwmsgtJHG2NpbR4n-JxokUPjhztUxKBGLL~TZ30ng__"
          width="80%"
          height="auto"
        />
      </Box>
      <Box
        sx={{
          p: "0 16px",
          textAlign: "center",
        }}
      >
        <Typography
          sx={{
            fontFamily: "Inter",
            fontWeight: 300,
            fontSize: "10px",
            lineHeight: "12px",
            color: "#6F6F6F",
          }}
        >
          *LG C2 42 (106cm) 4K Smart OLED evo TV
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          p: 2,
        }}
      >
        <Box
          sx={{
            backgroundColor: "#D9D9D9",
            color: "#fff",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "20px",
            height: "20px",
          }}
        >
          <ArrowBackIosNewOutlinedIcon sx={{ fontSize: "10px" }} />
        </Box>
        <Box
          width="83px"
          height="89px"
          sx={{ border: "1px solid orange", objectFit: "contain" }}
          component="img"
          src="https://s3-alpha-sig.figma.com/img/6d19/a1db/0486f1d758591d03f823a439ebfe649a?Expires=1713139200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Wrox5LvlaO8r81uXMzseXha271I~mJw0HjEG1C04ZB5RlFYH2lvy1fhUqcZADL0gzmgCfqC~eQoh3dd44Vrba~MjId1HsSczaK5bm0s9LJngR5a2R8RREYh9~KT74snCSY-s-waRCuPxjWXOFBQjoiAiNWaHVuDrDgDg5zAtEL0gGBwhdDGq~RT5~HMInLOGEHzjtZWQPokFhXMRqXW~OJNy--lEUWDLLoyBwSCgSyOOtCmVflRRdeY-OZS5k4elddwH2E0LQLJIj0Req-2xn702gegxkYnTMjH91-8cQktb5Du8EdbTnJTu9OAOqhyzHQtxcU3dRwmNGyYD9NPPWQ__"
        />
        <Box
          width="83px"
          height="89px"
          component="img"
          sx={{ objectFit: "contain" }}
          src="https://s3-alpha-sig.figma.com/img/7eb2/a683/0f0521eb7aa0164c98468729f92dd389?Expires=1713139200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=jLNGyg8dmJDBRBijmPC-0VRZug8VEvkwEkVuZKfiweXMZREz9WvoB-QQVofF80OVMFDLdz1zy8htGuCSEHgrP6m80trdT12kpmVKhTilv91eFs0cR0gs9FFnEVZ53spFA41wRfqg3AIdP-97IB8XoXxVC9Rmh1lecXunHVW1o9t4JNd~7pTAWmLlrne266s3F3blUprK5wKcppICjjde0pFpiuiDVkYCdY5Q~BJM925ySdLb0dGGS9HOV0UBov9eEF~hCkCMCOR2ZnmO5KL7XHgMsZ6UMNRv3RTx04AIb6jWtBZS-jTYikZn6itd3pYU5Lu73V~2xBZy3s6aAPiZOg__"
        />
        <Box
          width="83px"
          height="89px"
          component="img"
          sx={{ objectFit: "contain" }}
          src="https://s3-alpha-sig.figma.com/img/13d0/b3f4/6ea0db9ac40ec4cdb31b25184985a1aa?Expires=1713139200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Qmm9krq81VCILESUxZ1DWnJ4id4xcC9BkVAhkzf1syhbt3HY0J87pamkG4NLTp3~zDNHEfG7BdvIH2Dir8x36thMN25bk6PORUw9lyzg4MpXHNSOFFVRqbTDH-RmSd9ejctWiGco6ZsYZlWQZG6QFUotJKYK12Fe1xd9nRgIxek70pE3ddDN8Mm3bgUZ-CnF1buiZu4Npx87kT-SnUrhTCDkydyVrAK8WN9BzLvWJmK7~T4JxCmlSa8NPGBUfnBddUWRot5t7TR1T0XnenXFVpJvcXIhN2K9Rjxn3UBdppz9KmSlh8BMNhHd~W8ErBYqlEzxsVtsPOz29y98xe0IpQ__"
        />
        <Box
          sx={{
            backgroundColor: "#E73C17",
            color: "#fff",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "20px",
            height: "20px",
          }}
        >
          <ArrowForwardIosOutlined sx={{ fontSize: "10px" }} />
        </Box>
      </Box>
      <Box sx={{ p: "0 16px" }}>
        <Box sx={{ display: "flex", alignItems: "center", mb: "5px" }}>
          <Typography
            sx={{
              mr: 1,
              fontFamily: "Inter",
              fontWeight: 500,
              fontSize: "10px",
              lineHeight: "12px",
            }}
          >
            Brand:
          </Typography>
          <Typography
            sx={{
              fontFamily: "Inter",
              fontWeight: 300,
              fontSize: "10px",
              lineHeight: "12px",
            }}
          >
            LG
          </Typography>
        </Box>
        <Box sx={{ display: "flex", alignItems: "center", mb: "5px" }}>
          <Typography
            sx={{
              mr: 1,
              fontFamily: "Inter",
              fontWeight: 500,
              fontSize: "10px",
              lineHeight: "12px",
            }}
          >
            Model:
          </Typography>
          <Typography
            sx={{
              fontFamily: "Inter",
              fontWeight: 300,
              fontSize: "10px",
              lineHeight: "12px",
            }}
          >
            OLED42C2PSA
          </Typography>
        </Box>
        <Box sx={{ display: "flex", alignItems: "center", mb: "5px" }}>
          <Typography
            sx={{
              mr: 1,
              fontFamily: "Inter",
              fontWeight: 500,
              fontSize: "10px",
              lineHeight: "12px",
            }}
          >
            Availability:
          </Typography>
          <Typography
            sx={{
              fontFamily: "Inter",
              fontWeight: 300,
              fontSize: "10px",
              lineHeight: "12px",
              mb: "5px",
            }}
          >
            Only 2 in Stock
          </Typography>
        </Box>
        <Box>
          <Typography
            sx={{
              fontFamily: "Inter",
              fontWeight: 500,
              fontSize: "14px",
              lineHeight: "17px",
              color: "#191919",
              mb: "5px",
            }}
          >
            LG C2 42 (106cm) 4K Smart OLED evo TV | WebOS | Cinema HDR
          </Typography>
        </Box>
        <Box>
          <StarIcon sx={{ color: "#E73C17", fontSize: "10px" }} />
          <StarIcon sx={{ color: "#E73C17", fontSize: "10px" }} />
          <StarIcon sx={{ color: "#E73C17", fontSize: "10px" }} />
          <StarIcon sx={{ color: "#E73C17", fontSize: "10px" }} />
          <StarIcon sx={{ color: "#D7D7D7", fontSize: "10px" }} />
        </Box>
        <Box
          sx={{
            p: 2,
            "> ul li": {
              color: "#191919",
              fontFamily: "Inter",
              fontWeight: 300,
              fontSize: "11px",
              lineHeight: "13px",
            },
          }}
        >
          <ul>
            <li>α9 Gen5 AI Processor with AI Picture Pro & AI 4K Upscaling</li>
            <li>
              Pixel Dimming, Perfect Black, 100% Color Fidelity & Color Volume
            </li>
            <li>Hands-free Voice Control, Always Ready</li>
            <li>
              Dolby Vision IQ with Precision Detail, Dolby Atmos, Filmmaker Mode
            </li>
            <li>Eye Comfort Display: Low-Blue Light, Flicker-Free</li>
          </ul>
        </Box>
      </Box>
      <Box>
        <Divider sx={{ m: "2px 16px" }} />
      </Box>
      <Box
        sx={{
          p: 2,
          mt: 2,
          display: "flex",
          flexWrap: "wrap",
          fontSize: "12px",
          lineHeight: "14.5px",
          fontFamily: "Inter",
        }}
      >
        <Box
          sx={{
            height: "fit-content",
            width: "fit-content",
            color: "#E73C17",
            border: "1px solid #E73C17",
            fontWeight: 500,
            p: "4px 5px",
            m: "2.5px",
          }}
        >
          106 cm (42)
        </Box>
        <Box
          sx={{
            height: "fit-content",
            width: "fit-content",
            p: "4px 5px",
            m: "2.5px",
          }}
        >
          121 cm (48)
        </Box>
        <Box
          sx={{
            height: "fit-content",
            width: "fit-content",
            p: "4px 5px",
            m: "2.5px",
          }}
        >
          139 cm (55)
        </Box>
        <Box
          sx={{
            height: "fit-content",
            width: "fit-content",
            p: "4px 5px",
            m: "2.5px",
          }}
        >
          164 cm (65)
        </Box>
        <Box
          sx={{
            height: "fit-content",
            width: "fit-content",
            p: "4px 5px",
            m: "2.5px",
          }}
        >
          164 cm (65)
        </Box>
        <Box
          sx={{
            height: "fit-content",
            width: "fit-content",
            p: "4px 5px",
            m: "2.5px",
          }}
        >
          196 cm (77)
        </Box>
        <Box
          sx={{
            height: "fit-content",
            width: "fit-content",
            p: "4px 5px",
            m: "2.5px",
          }}
        >
          210 cm (83)
        </Box>
      </Box>
      <Divider sx={{ m: "2px 16px" }} />
      <Box sx={{ p: "0 16px" }}>
        <TabContext value={value}>
          <TabList
            onChange={handleChange}
            indicatorColor="secondary"
            textColor="#000"
            sx={{
              borderBottom: 1,
              borderColor: "divider",
            }}
          >
            <Tab
              label="Description"
              value="1"
              sx={{
                fontFamily: "Inter",
                fontSize: "12px",
                lineHeight: "14.5px",
                fontWeight: 500,
              }}
            />
            <Tab
              label="Specification"
              value="2"
              sx={{
                fontFamily: "Inter",
                fontSize: "12px",
                lineHeight: "14.5px",
                fontWeight: 500,
              }}
            />
            <Tab
              label="Reviews"
              value="3"
              sx={{
                fontFamily: "Inter",
                fontSize: "12px",
                lineHeight: "14.5px",
                fontWeight: 500,
              }}
            />
          </TabList>
          <TabPanel value="1" sx={{ p: "8px" }}>
            <Typography
              sx={{
                fontFamily: "Inter",
                fontWeight: 300,
                fontSize: "10px",
                lineHeight: "12px",
                mb: 1,
              }}
            >
              The LG C2 42 (106cm) 4K Smart OLED evo TV is the best all around
              OLED TV we've tested. Although all OLEDs deliver similar fantastic
              picture quality, this one stands out for its value because it has
              many gaming oriented features that are great for gamers.
            </Typography>
            <Typography
              sx={{
                fontFamily: "Inter",
                fontWeight: 300,
                fontSize: "10px",
                lineHeight: "12px",
                mb: 1,
              }}
            >
              *Only 65G2 is shown in the image for example purposes. All 2022 LG
              OLED models feature eco-friendly packaging.
            </Typography>
            <Typography
              sx={{
                fontFamily: "Inter",
                fontWeight: 300,
                fontSize: "10px",
                lineHeight: "12px",
              }}
            >
              **65C2 Stand model is at a minimum 39% lighter than the C1 series.
              <span style={{ color: "#E73C17" }}>More...</span>
            </Typography>
          </TabPanel>
          <TabPanel value="2" sx={{ p: "8px" }}>
            <Box
              sx={{
                fontFamily: "Inter",
                fontWeight: 300,
                fontSize: "10px",
                lineHeight: "12px",
              }}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
              iaculis, metus eu rhoncus efficitur, turpis sem tempus massa, id
              consectetur nunc purus in lectus. Donec non velit a odio volutpat
              volutpat in in nisi. Maecenas aliquet turpis lacus, id pharetra
              elit sagittis vel. Ut consectetur nisi quis ullamcorper
              pellentesque. Integer efficitur interdum nunc, ut elementum nulla.
              Phasellus feugiat nulla et rhoncus porttitor. Nullam at lectus sed
              turpis porttitor viverra accumsan hendrerit lorem. Praesent
              tincidunt nisi at nunc suscipit malesuada.
            </Box>
          </TabPanel>
          <TabPanel value="3" sx={{ p: "8px" }}>
            <Box
              sx={{
                fontFamily: "Inter",
                fontWeight: 300,
                fontSize: "10px",
                lineHeight: "12px",
              }}
            >
              Suspendisse potenti. Sed dapibus bibendum orci, eget semper diam
              tincidunt eget. Nulla a mi non nulla fermentum molestie. Aenean
              magna massa, tempus quis risus nec, sollicitudin consectetur mi.
              Donec dictum nulla sed nulla semper elementum. Nulla dictum
              ultrices risus, id ornare arcu rutrum vel. Curabitur vestibulum id
              nisi at pellentesque. Aenean a lacinia tellus. Aliquam iaculis
              odio sit amet velit laoreet, non feugiat tellus elementum.
            </Box>
          </TabPanel>
        </TabContext>
      </Box>
      <Box sx={{ p: 2, textAlign: "center" }}>
        <Typography>Related Products</Typography>
      </Box>
      <Box sx={{ p: 2, display: "flex", justifyContent: "space-evenly" }}>
        <ProductCard1 />
        <ProductCard2 />
      </Box>
      <Box sx={{ p: 2, display: "flex", justifyContent: "center" }}>
        <Box
          sx={{
            width: "6px",
            height: "6px",
            backgroundColor: "#EC3C17",
            borderRadius: "50%",
            m: "2px",
          }}
        />
        <Box
          sx={{
            width: "6px",
            height: "6px",
            backgroundColor: "#D7D7D7",
            borderRadius: "50%",
            m: "2px",
          }}
        />
        <Box
          sx={{
            width: "6px",
            height: "6px",
            backgroundColor: "#D7D7D7",
            borderRadius: "50%",
            m: "2px",
          }}
        />
        <Box
          sx={{
            width: "6px",
            height: "6px",
            backgroundColor: "#D7D7D7",
            borderRadius: "50%",
            m: "2px",
          }}
        />
        <Box
          sx={{
            width: "6px",
            height: "6px",
            backgroundColor: "#D7D7D7",
            borderRadius: "50%",
            m: "2px",
          }}
        />
      </Box>
      <Box
        sx={{
          p: "30px 50px 30px 20px",
          backgroundImage:
            "linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(https://s3-alpha-sig.figma.com/img/9bab/d9b2/20b5d149a701044cd87ca337590692a6?Expires=1713139200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=SiOIjwTBza8NvG0IYzmZgkKauRD5Y06kYfZfRp2pi1X1ChWFEFuNifE0qbBU~yqIziA3VUZVl8Sv1bOfSL8lCUutCkDiKGIy2sG2ro4mc-0l2O0Y8IkHbmF-dzjD6i7DgZcyi-W43EMgekGZ-QfuUdvmHPovw9JAlIHc3mWfdOK8CH9wOYbACSo69AOl8CtsGwEMCp82ypC5hrmpPQaUfUuWbdIw08D3dR2F~7TQcC4yknEGZuYORgdSP0iI21IWyuvCxlP9Ha-VnYnfxljNg0NKUB45TYEdcit20u6uQlotKk6Ol2P~qM7YbtCv1xIzl2ZSTkQEKZ8pzbzrkwTVeA__)",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <Box sx={{ color: "#fff" }}>
          <Typography
            sx={{
              fontFamily: "Inter",
              fontWeight: 600,
              fontSize: "18px",
              lineHeight: "21.7px",
              letterSpacing: "-0.5px",
              mb: "5px",
            }}
          >
            Join our newsletter and get offers
          </Typography>
          <Typography
            sx={{
              fontFamily: "Inter",
              fontWeight: 400,
              fontSize: "14px",
              lineHeight: "17px",
            }}
          >
            Sign up our newsletter
          </Typography>
          <Box sx={{ mb: 2, mt: 2, display: "flex", alignItems: "center" }}>
            <input
              type="text"
              placeholder="Enter your email"
              style={{
                border: "none",
                fontFamily: "Inter",
                fontWeight: 400,
                fontSize: "10px",
                lineHeight: "12px",
                height: "37px",
                width: "85%",
                padding: "0px 10px",
              }}
            />
            <button
              style={{
                border: "none",
                backgroundColor: "#E73C17",
                width: "fit-content",
                height: "37px",
                color: "#fff",
                fontFamily: "Inter",
                fontWeight: 500,
                fontSize: "12px",
                lineHeight: "14.5px",
                padding: "10px 20px",
              }}
            >
              SUBSCRIBE
            </button>
          </Box>
        </Box>
      </Box>
      <Box sx={{ p: 2, backgroundColor: "#2F333A" }}>
        <Box>
          <Typography
            sx={{
              fontFamily: "Inter",
              fontWeight: 500,
              fontSize: "10px",
              lineHeight: "12px",
              color: "#fff",
              textDecoration: "underline",
              m: "20px 10px",
            }}
          >
            ABOUT US
          </Typography>
          <Typography
            sx={{
              fontFamily: "Inter",
              fontWeight: 500,
              fontSize: "10px",
              lineHeight: "12px",
              color: "#fff",
              textDecoration: "underline",
              m: "20px 10px",
            }}
          >
            INFORMATION
          </Typography>
          <Typography
            sx={{
              fontFamily: "Inter",
              fontWeight: 500,
              fontSize: "10px",
              lineHeight: "12px",
              color: "#fff",
              textDecoration: "underline",
              m: "20px 10px",
            }}
          >
            ACCOUNT
          </Typography>
          <Typography
            sx={{
              fontFamily: "Inter",
              fontWeight: 500,
              fontSize: "10px",
              lineHeight: "12px",
              color: "#fff",
              textDecoration: "underline",
              m: "20px 10px",
            }}
          >
            STORE
          </Typography>
          <Typography
            sx={{
              fontFamily: "Inter",
              fontWeight: 500,
              fontSize: "10px",
              lineHeight: "12px",
              color: "#fff",
              textDecoration: "underline",
              m: "20px 10px",
            }}
          >
            CONTACT US
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Typography
            sx={{
              fontFamily: "Inter",
              fontWeight: 400,
              fontSize: "12px",
              lineHeight: "14.5px",
              color: "#fff",
              mt: "20px",
            }}
          >
            Copyright 2023 All Right Reserved
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default MobilePDP;
