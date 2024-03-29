import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import Carrousel from "./Carrousel";

const Mobile = () => {
  const divStyle = {
    height: "300px",
    padding: "30px",
  };
  return (
    <Grid container sx={{}}>
      <Grid
        item
        xs={12}
        sx={{
          height: "80vh",
          backgroundImage:
            "url('https://s3-alpha-sig.figma.com/img/17e1/3420/2e3130d914626b07ec182fc5179ca5d0?Expires=1712534400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ATCxaxML6AkdHjHi3tu39runUIswiwIAiMD78rzA9d3TWwqgmM2T-wRTT64j54fYvC78fNbAS3lpOq7pRQH1ld0kxx95WiC-Z5GplcE9Dz1zQgYxqRxHvBXbTWMP3BUxhDIkmrSw7fPnhvlj-9rnSz6u92H4jRFBZTBznuBMDHJsIMczD~GrxLq-y9hisgP2cZLY7Wsa6aZJhfe5DGvXhplXIV-FbrOTN5LScFm0AkO6gFlZ332bdbSxIVa2l1NVXe47urcEdMEpSpMavE42~gL7ir~xCQTnnsp-NN0rj5-CQBGKFTH87T6l6aXQYFQfrBS60Oy1Gz6Sg9UdSvaiwA__')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            height: "fit-content",
            m: "41px 22px 0 22px",
          }}
        >
          <Typography
            sx={{
              fontFamily: "Merriweather",
              fontSize: "34px",
              fontWeight: 700,
              lineHeight: "25px",
              letterSpacing: "2px",
              textAlign: "left",
              color: "#fff",
            }}
          >
            antic
          </Typography>

          <Typography sx={{ fontSize: "40px" }}>=</Typography>
        </Box>
        <Box
          sx={{
            p: "25px",
          }}
        >
          <Typography
            sx={{
              color: "#fff",
              textAlign: "center",
              fontSize: "14px",
              lineHeight: "20px",
              fontFamily: "Varta",
              fontWeight: 700,
              letterSpacing: "1px",
            }}
          >
            HOME DESIGN
          </Typography>
          <Typography
            sx={{
              fontFamily: "Merriweather",
              fontSize: "35px",
              lineHeight: "40px",
              color: "#fff",
              textAlign: "center",
              fontWeight: 300,
              letterSpacing: "-0.3px",
            }}
          >
            Elegance for <br /> Interiors & <br />
            Exteriors
          </Typography>
          <Typography
            sx={{
              fontFamily: "Varta",
              fontSize: "18px",
              lineHeight: "25px",
              fontWeight: 400,
              color: "#F7F8F9",
              textAlign: "center",
              p: "0px 15px",
            }}
          >
            We provide everyone with modern, trendy, quality furniture
          </Typography>
          <Box
            sx={{
              margin: "10px auto",
              width: "50px",
              height: "50px",
              borderRadius: "100px",
              border: "2px solid #fff",
            }}
          />
        </Box>
      </Grid>
      <Grid
        item
        xs={12}
        sx={{
          padding: "48px 32px",
          backgroundColor: "#F3EEE8",
          height: "fit-content",
        }}
      >
        <Typography
          sx={{
            fontFamily: "Merriweather",
            fontSize: "35px",
            lineHeight: "40px",
            color: "#534B42",
            mb: 4,
            letterSpacing: "-0.3px",
          }}
        >
          We stay by your side to design your projects
        </Typography>
        <Typography
          sx={{
            fontFamily: "Lato",
            color: "#A06056",
            fontSize: "17px",
            lineHeight: "25px",
            fontWeight: 900,
            mb: 4,
            letterSpacing: "0.3px",
          }}
        >
          Find out more {">"}
        </Typography>
        <Typography
          sx={{
            fontFamily: "Varta",
            color: "#A06056",
            fontSize: "25px",
            lineHeight: "30px",
            fontWeight: 600,
            letterSpacing: "-0.2px",
            mb: "5px",
          }}
        >
          Our Advices
        </Typography>
        <Typography
          sx={{
            fontSize: "18px",
            textAlign: "justify",
            lineHeight: "25px",
            color: "#706458E5",
            mb: 4,
            fontFamily: "Varta",
          }}
        >
          What if you took advantage of this rather special period to rethink
          your interior? You spend more time at home so you might as well feel
          good there.
        </Typography>
        <Typography
          sx={{
            fontFamily: "Varta",
            color: "#A06056",
            fontSize: "25px",
            lineHeight: "30px",
            fontWeight: 600,
            letterSpacing: "-0.2px",
            mb: "5px",
          }}
        >
          Click and Collect
        </Typography>
        <Typography
          sx={{
            fontSize: "18px",
            textAlign: "justify",
            lineHeight: "25px",
            color: "#706458E5",
            mb: 4,
            fontFamily: "Varta",
          }}
        >
          Adapted and contactless. Free from € 200 of purchases in stores
          offering the service.
        </Typography>
        <Typography
          sx={{
            fontFamily: "Varta",
            color: "#A06056",
            fontSize: "25px",
            lineHeight: "30px",
            fontWeight: 600,
            letterSpacing: "-0.2px",
            mb: "5px",
          }}
        >
          Conception Service
        </Typography>
        <Typography
          sx={{
            fontSize: "18px",
            textAlign: "justify",
            lineHeight: "25px",
            color: "#706458E5",
            mb: 4,
            fontFamily: "Varta",
          }}
        >
          Personalized service with an expert advisor for your interior and
          exterior decoration or layout projects.{" "}
        </Typography>
        <Typography
          sx={{
            fontFamily: "Varta",
            color: "#A06056",
            fontSize: "25px",
            lineHeight: "30px",
            fontWeight: 600,
            letterSpacing: "-0.2px",
            mb: "5px",
          }}
        >
          Installation Service
        </Typography>
        <Typography
          sx={{
            fontSize: "18px",
            textAlign: "justify",
            lineHeight: "25px",
            color: "#706458E5",
            mb: 4,
            fontFamily: "Varta",
          }}
        >
          Our furniture packaged in flat packs are designed for easy assembly.
          But you can call on our partner.
        </Typography>
      </Grid>
      <Grid
        item
        xs={12}
        sx={{ padding: "48px 32px", backgroundColor: "#fff", height: "auto" }}
      >
        <Typography
          sx={{
            fontFamily: "Merriweather",
            fontWeight: 400,
            fontSize: "35px",
            lineHeight: "40px",
            letterSpacing: "-0.3px",
            color: "#121212",
            mb: 2,
          }}
        >
          Be aware of the latest trends
        </Typography>

        <Typography
          sx={{
            fontFamily: "Varta",
            fontWeight: 400,
            fontSize: "18px",
            lineHeight: "25px",
            color: "#706458E5",
            mb: 2,
          }}
        >
          Stay informed of new trends, but also of our various offers.
        </Typography>

        <Typography
          sx={{
            fontFamily: "Karla",
            fontWeight: 700,
            fontSize: "17px",
            lineHeight: "25px",
            color: "#A06056",
            letterSpacing: "0.3px",
            mb: 2,
          }}
        >
          Learn more {">"}
        </Typography>
        <Box sx={{ width: "100%", height: "fit-content" }}>
          <input
            placeholder="email@address.com"
            style={{
              width: "calc(100% - 25px)",
              height: "fit-content",
              padding: "12px 15px",
              border: "none",
              borderRadius: "1px",
              backgroundColor: "#F3EEE84D",
              fontFamily: "Varta",
              fontWeight: 400,
              fontSize: "18px",
              lineHeight: "25px",
              color: "#00000073",
              marginTop: "15px",
            }}
          />
          <button
            style={{
              borderRadius: "1px",
              backgroundColor: "#534B42",
              padding: "12px 30px 13px 30px",
              border: "none",
              color: "#fff",
              height: "fit-content",
              width: "95%",
              marginTop: "15px",
              fontFamily: "Karla",
              fontWeight: 700,
              fontSize: "17px",
              lineHeight: "25px",
              letterSpacing: "0.3px",
            }}
          >
            Subscribe
          </button>
        </Box>
        <Typography
          sx={{
            fontFamily: "Merriweather",
            fontWeight: 400,
            fontSize: "35px",
            lineHeight: "40px",
            letterSpacing: "-0.3px",
            mt: 8,
            mb: 2,
            color: "#534B42",
          }}
        >
          Inspirations
        </Typography>
        <Typography
          sx={{
            fontFamily: "Varta",
            fontWeight: 400,
            fontSize: "18px",
            lineHeight: "25px",
            color: "#706458E5",
            mb: 3,
          }}
        >
          Our experts are keen to stay on top of trends in order to offer you
          new inspirations for your interior and exterior every day. Remember
          that to inspire you we have to inspire ourselves and we want to share
          that with you.
        </Typography>
      </Grid>
      <Grid item xs={12} sx={{ height: "fit-content", mb: 2 }}>
        <Carrousel />
      </Grid>
      <Grid
        item
        xs={12}
        sx={{
          padding: "48px 32px",
          backgroundColor: "#F3EEE8",
          height: "auto",
        }}
      >
        <Typography
          sx={{
            fontFamily: "Merriweather",
            fontSize: "34px",
            lineHeight: "25px",
            fontWeight: 700,
            letterSpacing: "2px",
            color: "#534B42",
            textAlign: "center",
            mb: 4,
          }}
        >
          antic
        </Typography>

        <Box
          sx={{
            height: "fit-content",
            fontFamily: "Varta",
            fontWeight: 400,
            fontSize: "18px",
            lineHeight: "25px",
            color: "#706458",
            mb: 4,
          }}
        >
          <Typography
            sx={{
              fontFamily: "Varta",
              fontWeight: 600,
              fontSize: "25px",
              lineHeight: "30px",
              letterSpacing: "-0.2px",
              color: "#121212",
            }}
          >
            About
          </Typography>
          <Typography sx={{ m: "10px 0" }}>Our story</Typography>
          <Typography sx={{ m: "10px 0" }}>Our stores</Typography>
          <Typography sx={{ m: "10px 0" }}>Our partners</Typography>
        </Box>

        <Box
          sx={{
            height: "fit-content",
            fontFamily: "Varta",
            fontWeight: 400,
            fontSize: "18px",
            lineHeight: "25px",
            color: "#706458",
            mb: 4,
          }}
        >
          <Typography
            sx={{
              fontFamily: "Varta",
              fontWeight: 600,
              fontSize: "25px",
              lineHeight: "30px",
              letterSpacing: "-0.2px",
              color: "#121212",
            }}
          >
            Services
          </Typography>
          <Typography sx={{ m: "10px 0" }}>Click and collect</Typography>
          <Typography sx={{ m: "10px 0" }}>Conception</Typography>
          <Typography sx={{ m: "10px 0" }}>Installation</Typography>
          <Typography sx={{ m: "10px 0" }}>Advices</Typography>
          <Typography sx={{ m: "10px 0" }}>Gift Card</Typography>
        </Box>

        <Box
          sx={{
            height: "fit-content",
            fontFamily: "Varta",
            fontWeight: 400,
            fontSize: "18px",
            lineHeight: "25px",
            color: "#706458",
            mb: 4,
          }}
        >
          <Typography
            sx={{
              fontFamily: "Varta",
              fontWeight: 600,
              fontSize: "25px",
              lineHeight: "30px",
              letterSpacing: "-0.2px",
              color: "#121212",
            }}
          >
            Products
          </Typography>
          <Typography sx={{ m: "10px 0" }}>Furniture</Typography>
          <Typography sx={{ m: "10px 0" }}>Decoration</Typography>
          <Typography sx={{ m: "10px 0" }}>Storage</Typography>
          <Typography sx={{ m: "10px 0" }}>Baby and child</Typography>
          <Typography sx={{ m: "10px 0" }}>Connected home</Typography>
        </Box>

        <Box
          sx={{
            height: "fit-content",
            fontFamily: "Varta",
            fontWeight: 400,
            fontSize: "18px",
            lineHeight: "25px",
            color: "#706458",
            mb: 4,
          }}
        >
          <Typography
            sx={{
              fontFamily: "Varta",
              fontWeight: 600,
              fontSize: "25px",
              lineHeight: "30px",
              letterSpacing: "-0.2px",
              color: "#121212",
            }}
          >
            Rooms
          </Typography>
          <Typography sx={{ m: "10px 0" }}>Living Room</Typography>
          <Typography sx={{ m: "10px 0" }}>Dining Room</Typography>
          <Typography sx={{ m: "10px 0" }}>Cooked</Typography>
          <Typography sx={{ m: "10px 0" }}>Bedroom</Typography>
          <Typography sx={{ m: "10px 0" }}>Bathroom</Typography>
          <Typography sx={{ m: "10px 0" }}>Office</Typography>
          <Typography sx={{ m: "10px 0" }}>Laundry</Typography>
          <Typography sx={{ m: "10px 0" }}>Garage</Typography>
        </Box>

        <Box sx={{ height: "fit-content" }}>
          <Typography
            sx={{
              fontFamily: "Varta",
              fontWeight: 600,
              fontSize: "25px",
              lineHeight: "30px",
              letterSpacing: "-0.2px",
              color: "#121212",
              mb: 2,
            }}
          >
            We respect our planet
          </Typography>
          <Box
            component="img"
            sx={{ width: "95%", height: "160px", mb: 2 }}
            src="https://s3-alpha-sig.figma.com/img/cc3e/e34f/505a32d6d777c66cfe3862b428ae2b81?Expires=1712534400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=aW1v3clAiYA3x7F~Bd8YpjATxghcq2elJRhQR4~RyLPozgymqapMN~F7imgWbpqRLL8608EV8bGpBXskMRxS8LWV4xS8h66JLTq~~QLMdz1Hdxm2hsXomsyd69jp7ssKbdluK~ZEj85nDS1VOewIlZyJTf5YhXpTa2cSPvJEUmWO3wa4ho5q3-3fSUgPL3zLjDN7HNGzNDss4dPrPfI6c3BhNsJ639SoY3dSgzugMkREK6mWlKb5IADYlcYkiOjtUgghgF2RlZ2BixkgpX~o253p4-tYy8epcqHc1Lt6bkBXta76qefDGHlJXSS03VtSYzlzbUPq8LroKRINR4kV7g__"
          />
          <Typography
            sx={{
              fontFamily: "Varta",
              fontWeight: 400,
              fontSize: "18px",
              lineHeight: "25px",
              color: "#706458",
              mb: 2,
            }}
          >
            We’re taking positive steps to reduce our impact on the planet. For
            us, that means retailing responsibly. We’ve set a number of goals to
            get us there.
          </Typography>
          <Typography
            sx={{
              fontFamily: "Karla",
              fontWeight: 700,
              fontSize: "17px",
              lineHeight: "25px",
              letterSpacing: "0.3px",
              color: "#A06056",
              mb: 4,
            }}
          >
            Learn more {">"}
          </Typography>
        </Box>

        <Box
          sx={{
            height: "fit-content",
            display: "flex",
            justifyContent: "space-evenly",
            mb: 4,
          }}
        >
          <svg
            style={{ height: "100%" }}
            width="32px"
            height="32px"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M28.8 0H3.2C1.43269 0 0 1.43269 0 3.2V28.8C0 30.5673 1.43269 32 3.2 32H16V19.9529H11.2V15.4353H16V13.0093C16 8.41638 18.3835 6.4 22.2799 6.4C24.1094 6.4 25.0937 6.53027 25.5719 6.59356L25.6 6.59727V10.9176H22.9424C21.2885 10.9176 20.8 11.773 20.8 13.5048V15.4353H25.5585L24.9006 19.9529H20.8V32H28.8C30.5673 32 32 30.5673 32 28.8V3.2C32 1.43269 30.5673 0 28.8 0Z"
              fill="#706458"
              fillOpacity="0.9"
            />
          </svg>

          <svg
            style={{ height: "100%" }}
            width="32px"
            height="32px"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M28.8 0H3.2C1.43269 0 0 1.43269 0 3.2V28.8C0 30.5673 1.43269 32 3.2 32H28.8C30.5673 32 32 30.5673 32 28.8V3.2C32 1.43269 30.5673 0 28.8 0ZM24.5603 9.98298C25.4899 9.87553 26.3755 9.63729 27.2 9.28328C26.584 10.1737 25.8044 10.9559 24.9058 11.5831C24.9144 11.7739 24.9187 11.9655 24.9187 12.1579C24.9187 18.0296 20.2976 24.8 11.8445 24.8C9.24881 24.8 6.83401 24.0645 4.8 22.8042C5.16011 22.8458 5.52625 22.8667 5.8967 22.8667C8.05046 22.8667 10.0319 22.1561 11.6042 20.9641C9.59342 20.9283 7.89625 19.643 7.31129 17.878C7.59128 17.9288 7.87988 17.9571 8.17538 17.9571C8.59493 17.9571 9.00156 17.9029 9.38665 17.8013C7.28372 17.394 5.70027 15.5981 5.70027 13.4448V13.389C6.3197 13.7214 7.02871 13.9213 7.78167 13.9446C6.54886 13.1483 5.73818 11.788 5.73818 10.247C5.73818 9.43155 5.96476 8.66854 6.35932 8.01215C8.62681 10.701 12.0125 12.4703 15.8316 12.6552C15.754 12.3311 15.7127 11.9913 15.7127 11.6431C15.7127 9.18999 17.77 7.2 20.308 7.2C21.6295 7.2 22.8236 7.73977 23.6618 8.60357C24.7094 8.40365 25.6932 8.03381 26.5806 7.52486C26.2377 8.56275 25.5097 9.43322 24.5603 9.98298Z"
              fill="#706458"
              fillOpacity="0.9"
            />
          </svg>
          <svg
            style={{ height: "100%" }}
            width="32px"
            height="32px"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M28.8 0H3.2C1.43269 0 0 1.43269 0 3.2V28.8C0 30.5673 1.43269 32 3.2 32H28.8C30.5673 32 32 30.5673 32 28.8V3.2C32 1.43269 30.5673 0 28.8 0ZM6.4 7.30246C6.4 8.68399 7.5205 9.80638 8.9062 9.80638C10.2875 9.80638 11.4109 8.68399 11.4109 7.30246C11.4109 5.9224 10.2875 4.8 8.9062 4.8C7.52196 4.8 6.4 5.92094 6.4 7.30246ZM6.8007 25.6H11.0991V11.7819H6.8007V25.6ZM27.2 25.6H22.9045V18.8802C22.9045 17.2774 22.8753 15.216 20.6708 15.216C18.4341 15.216 18.0903 16.9615 18.0903 18.7637V25.6H13.7947V11.7819H17.9183V13.67H17.9766C18.5507 12.584 19.9524 11.4383 22.0433 11.4383C26.3957 11.4383 27.2 14.3003 27.2 18.0213V25.6Z"
              fill="#706458"
              fillOpacity="0.9"
            />
          </svg>
          <svg
            style={{ height: "100%" }}
            width="32px"
            height="32px"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M9.6 0H22.4C27.7019 0 32 4.29807 32 9.6V22.4C32 27.7019 27.7019 32 22.4 32H9.6C4.29807 32 0 27.7019 0 22.4V9.6C0 4.29807 4.29807 0 9.6 0ZM25.6 4.8C26.4 4.8 27.2 5.6 27.2 6.4C27.2 7.2 26.4 8 25.6 8C24.8 8 24 7.2 24 6.4C24 5.6 24.8 4.8 25.6 4.8ZM24 16C24 11.588 20.412 8 16 8C11.588 8 8 11.588 8 16C8 20.412 11.588 24 16 24C20.412 24 24 20.412 24 16ZM16 11.2C13.349 11.2 11.2 13.349 11.2 16C11.2 18.651 13.349 20.8 16 20.8C18.651 20.8 20.8 18.651 20.8 16C20.8 13.349 18.651 11.2 16 11.2Z"
              fill="#706458"
              fillOpacity="0.9"
            />
          </svg>
        </Box>
        <Box
          sx={{
            height: "fit-content",
            fontFamily: "Varta",
            fontWeight: 400,
            fontSize: "18px",
            lineHeight: "25px",
            color: "#00000073",
          }}
        >
          <Typography sx={{ display: "inline-block", mr: 2 }}>
            Privacy policy
          </Typography>
          <Typography sx={{ display: "inline-block" }}>
            Terms of service
          </Typography>
          <Typography sx={{ mt: 2, mb: 4 }}>Language</Typography>
          <Typography
            sx={{
              height: "fit-content",
              fontFamily: "Varta",
              fontWeight: 400,
              fontSize: "18px",
              lineHeight: "25px",
              color: "#706458E5",
            }}
          >
            © 2021 Agence Dnd
          </Typography>
        </Box>
      </Grid>
    </Grid>
  );
};

export default Mobile;
