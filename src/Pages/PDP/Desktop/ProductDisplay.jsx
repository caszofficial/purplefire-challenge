import { Box, Divider, Typography } from "@mui/material";
import React from "react";
import StarIcon from "@mui/icons-material/Star";
import "../../../index.css";

const ProductDisplay = () => {
  return (
    <Box sx={{ display: "flex", p: 8, gap: "0px" }}>
      {/* previews */}
      <Box sx={{ flex: 0.5 }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "space-evenly",
            p: "0 20px",
          }}
        >
          <img
            width="150px"
            height="115px"
            style={{ objectFit: "contain", border: "1px solid #E73C17" }}
            src="https://s3-alpha-sig.figma.com/img/0689/b557/b9b170c0451405d06c116c902a50e095?Expires=1713139200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=jxIXlKvQZRZM6smRwIHNO7mZZy1HJVh6bibFLyVWBJ7vW0dRA6v1Lmz4ZKbKrnX5J-DBd~OyKNvHvY2abLGfAri3aP~7vQJp0GTxOrYPsMFzg9bNrBgwLPko~ssVF3hKwV0Y1vwvz5b2LAvCPU8WkCAKyRTR4q2ggV3o7ECoiLVu8G6C5eDDXI572ChQTMuxZ~61RXAcv9I0nTSKNYmyQKpbPAA883M-7TYuJwLcT4mMBpYbtp9ds~XBJ3rHBNHqosBZvtIbTnv4WhhfweiMsqwC8fmL3E1unjyoK6dmrlHA-qMeMLA6pWfqJfTieoueOZPdO1~5hbIA7H6JArw7gw__"
            alt="Not Found"
          />
          <img
            width="150px"
            height="115px"
            style={{ objectFit: "contain" }}
            src="https://s3-alpha-sig.figma.com/img/6d19/a1db/0486f1d758591d03f823a439ebfe649a?Expires=1713139200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Wrox5LvlaO8r81uXMzseXha271I~mJw0HjEG1C04ZB5RlFYH2lvy1fhUqcZADL0gzmgCfqC~eQoh3dd44Vrba~MjId1HsSczaK5bm0s9LJngR5a2R8RREYh9~KT74snCSY-s-waRCuPxjWXOFBQjoiAiNWaHVuDrDgDg5zAtEL0gGBwhdDGq~RT5~HMInLOGEHzjtZWQPokFhXMRqXW~OJNy--lEUWDLLoyBwSCgSyOOtCmVflRRdeY-OZS5k4elddwH2E0LQLJIj0Req-2xn702gegxkYnTMjH91-8cQktb5Du8EdbTnJTu9OAOqhyzHQtxcU3dRwmNGyYD9NPPWQ__"
            alt="Not Found"
          />
          <img
            width="150px"
            height="115px"
            style={{ objectFit: "contain" }}
            src="https://s3-alpha-sig.figma.com/img/7eb2/a683/0f0521eb7aa0164c98468729f92dd389?Expires=1713139200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=jLNGyg8dmJDBRBijmPC-0VRZug8VEvkwEkVuZKfiweXMZREz9WvoB-QQVofF80OVMFDLdz1zy8htGuCSEHgrP6m80trdT12kpmVKhTilv91eFs0cR0gs9FFnEVZ53spFA41wRfqg3AIdP-97IB8XoXxVC9Rmh1lecXunHVW1o9t4JNd~7pTAWmLlrne266s3F3blUprK5wKcppICjjde0pFpiuiDVkYCdY5Q~BJM925ySdLb0dGGS9HOV0UBov9eEF~hCkCMCOR2ZnmO5KL7XHgMsZ6UMNRv3RTx04AIb6jWtBZS-jTYikZn6itd3pYU5Lu73V~2xBZy3s6aAPiZOg__"
            alt="Not Found"
          />
          <img
            width="150px"
            height="115px"
            style={{ objectFit: "contain" }}
            src="https://s3-alpha-sig.figma.com/img/13d0/b3f4/6ea0db9ac40ec4cdb31b25184985a1aa?Expires=1713139200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Qmm9krq81VCILESUxZ1DWnJ4id4xcC9BkVAhkzf1syhbt3HY0J87pamkG4NLTp3~zDNHEfG7BdvIH2Dir8x36thMN25bk6PORUw9lyzg4MpXHNSOFFVRqbTDH-RmSd9ejctWiGco6ZsYZlWQZG6QFUotJKYK12Fe1xd9nRgIxek70pE3ddDN8Mm3bgUZ-CnF1buiZu4Npx87kT-SnUrhTCDkydyVrAK8WN9BzLvWJmK7~T4JxCmlSa8NPGBUfnBddUWRot5t7TR1T0XnenXFVpJvcXIhN2K9Rjxn3UBdppz9KmSlh8BMNhHd~W8ErBYqlEzxsVtsPOz29y98xe0IpQ__"
            alt="Not Found"
          />
        </Box>
      </Box>
      {/* product image */}
      <Box sx={{ flex: 1 }}>
        <Box sx={{ backgroundColor: "#F1F1F1", width: "fit-content" }}>
          <img
            style={{
              objectFit: "cover",
            }}
            src="https://s3-alpha-sig.figma.com/img/28ba/45f6/86b94896d9ea4225ea4cf6b97999c13c?Expires=1713139200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=SEj5bp3zt848tWc53kGJx3kuXogau-XS2mFrD04tH3Xc2ymvn-RMObDqy3n7vsUd-P~ZLo6zDGcjE05lPbGUDv1k35XMbHNWw1rgQPRLLIPQLr2CFI24agWIGoiTjocxIeWEj4HngB1PQzRutTUPqkTMHsOdsCjkpj0Cr0iJSNU~oxkQk5Ob5BaNwYcyYS3Ayar0huY~iDWLXqEQ26EGBbcYIKpS9vgjuTI5xyuklrD2BX1AX96~7SedjLRp-UxFf4QmZxjo1PrBVcBPG9KYPTYtYu~FtaFZeY6dKpYlEi2QFIwmsgtJHG2NpbR4n-JxokUPjhztUxKBGLL~TZ30ng__"
            alt="Not Found"
          />
        </Box>
        <Typography
          sx={{
            fontFamily: "Inter",
            fontWeight: 300,
            fontSize: "15px",
            lineHeight: "18px",
            color: "#6F6F6F",
            mt: 2,
          }}
        >
          *LG C2 42 (106cm) 4K Smart OLED evo TV
        </Typography>
      </Box>
      {/* product detail */}
      <Box sx={{ flex: 1 }}>
        <Box sx={{ p: "0 16px" }}>
          <Box sx={{ display: "flex", alignItems: "center", mb: "5px" }}>
            <Typography
              sx={{
                mr: 1,
                fontFamily: "Inter",
                fontWeight: 500,
                fontSize: "18px",
                lineHeight: "19.3px",
              }}
            >
              Brand:
            </Typography>
            <Typography
              sx={{
                fontFamily: "Inter",
                fontWeight: 300,
                fontSize: "18px",
                lineHeight: "19.3px",
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
                fontSize: "18px",
                lineHeight: "19.3px",
              }}
            >
              Model:
            </Typography>
            <Typography
              sx={{
                fontFamily: "Inter",
                fontWeight: 300,
                fontSize: "18px",
                lineHeight: "19.3px",
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
                fontSize: "18px",
                lineHeight: "19.3px",
              }}
            >
              Availability:
            </Typography>
            <Typography
              sx={{
                fontFamily: "Inter",
                fontWeight: 300,
                fontSize: "18px",
                lineHeight: "19.3px",
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
                fontSize: "32px",
                lineHeight: "38.7px",
                color: "#191919",
                mb: "5px",
              }}
            >
              LG C2 42 (106cm) 4K Smart OLED evo TV | WebOS | Cinema HDR
            </Typography>
          </Box>
          <Box>
            <StarIcon sx={{ color: "#E73C17", fontSize: "30px" }} />
            <StarIcon sx={{ color: "#E73C17", fontSize: "30px" }} />
            <StarIcon sx={{ color: "#E73C17", fontSize: "30px" }} />
            <StarIcon sx={{ color: "#E73C17", fontSize: "30px" }} />
            <StarIcon sx={{ color: "#D7D7D7", fontSize: "30px" }} />
          </Box>
          <Box
            sx={{
              p: 2,
              "> ul li": {
                color: "#191919",
                fontFamily: "Inter",
                fontWeight: 300,
                fontSize: "16px",
                lineHeight: "19.3px",
              },
            }}
          >
            <ul>
              <li>
                α9 Gen5 AI Processor with AI Picture Pro & AI 4K Upscaling
              </li>
              <li>
                Pixel Dimming, Perfect Black, 100% Color Fidelity & Color Volume
              </li>
              <li>Hands-free Voice Control, Always Ready</li>
              <li>
                Dolby Vision IQ with Precision Detail, Dolby Atmos, Filmmaker
                Mode
              </li>
              <li>Eye Comfort Display: Low-Blue Light, Flicker-Free</li>
            </ul>
          </Box>
        </Box>
        <Divider sx={{ m: "2px 16px" }} />
        <Box
          sx={{
            p: 2,
            mt: 2,
            display: "flex",
            flexWrap: "wrap",
            fontSize: "18px",
            lineHeight: "21.8px",
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
              p: "10px 20px",
              m: "2.5px",
            }}
          >
            106 cm (42)
          </Box>
          <Box
            sx={{
              height: "fit-content",
              width: "fit-content",
              p: "10px 20px",
              m: "2.5px",
            }}
          >
            121 cm (48)
          </Box>
          <Box
            sx={{
              height: "fit-content",
              width: "fit-content",
              p: "10px 20px",
              m: "2.5px",
            }}
          >
            139 cm (55)
          </Box>
          <Box
            sx={{
              height: "fit-content",
              width: "fit-content",
              p: "10px 20px",
              m: "2.5px",
            }}
          >
            164 cm (65)
          </Box>
          <Box
            sx={{
              height: "fit-content",
              width: "fit-content",
              p: "10px 20px",
              m: "2.5px",
            }}
          >
            196 cm (77)
          </Box>
          <Box
            sx={{
              height: "fit-content",
              width: "fit-content",
              p: "10px 20px",
              m: "2.5px",
            }}
          >
            210 cm (83)
          </Box>
        </Box>
        <Divider sx={{ m: "2px 16px" }} />
        <Box
          sx={{
            p: "20px 100px",
            display: "flex",
            justifyContent: "space-evenly",
          }}
        >
          <Box sx={{ flex: 1 }}>
            <Typography
              sx={{
                fontFamily: "Inter",
                fontWeight: 400,
                fontSize: "16px",
                lineHeight: "20px",
                color: "#191919",
                mb: 2,
              }}
            >
              USD(incl. of all taxes)
            </Typography>
            <Typography
              sx={{
                fontFamily: "Inter",
                fontWeight: 400,
                fontSize: "32px",
                lineHeight: "39px",
                color: "#191919",
                mb: 2,
              }}
            >
              $600.72
              <span
                style={{
                  fontFamily: "Inter",
                  fontWeight: 400,
                  fontSize: "24px",
                  lineHeight: "29px",
                  color: "#D9D9D9",
                  textDecoration: "line-through",
                }}
              >
                $800.00
              </span>
            </Typography>

            <button
              className="buynow"
              style={{
                width: "200px",
                height: "60px",
                border: "none",
                color: "#fff",
                fontFamily: "Inter",
                fontWeight: 500,
                fontSize: "18px",
                lineHeight: "22px",
              }}
            >
              Buy Now
            </button>
          </Box>
          <Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                // mt: 2,
              }}
            >
              <Box
                sx={{
                  height: "60px",
                  width: "64px",
                  border: "1px solid #D9D9D9",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  fontFamily: "Inter",
                  fontWeight: 400,
                  fontSize: "32px",
                }}
              >
                -
              </Box>
              <Box
                sx={{
                  height: "60px",
                  width: "64px",
                  border: "1px solid #D9D9D9",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  fontFamily: "Inter",
                  fontWeight: 400,
                  fontSize: "32px",
                }}
              >
                1
              </Box>
              <Box
                sx={{
                  height: "60px",
                  width: "64px",
                  border: "1px solid #D9D9D9",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  fontFamily: "Inter",
                  fontWeight: 400,
                  fontSize: "32px",
                }}
              >
                +
              </Box>
            </Box>
            <Box>
              <button
                className="addtocart"
                style={{
                  width: "200px",
                  height: "60px",
                  border: "1px solid #E73C17",
                  color: "#E73C17",
                  fontFamily: "Inter",
                  fontWeight: 500,
                  fontSize: "18px",
                  lineHeight: "22px",
                  marginTop: "28px",
                }}
              >
                Add to Cart
              </button>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default ProductDisplay;
