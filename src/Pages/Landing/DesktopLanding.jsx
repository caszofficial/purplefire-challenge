import { Box, Grid } from "@mui/material";
import React from "react";
import Carrousel from "./Carrousel";
import {
  IconCircleChevronDown,
  IconCircleChevronLeft,
  IconCircleChevronRight,
  IconMessageCircle2Filled,
} from "@tabler/icons-react";

const DesktopLanding = () => {
  const ScrollIntoView = () => {
    const stage2 = document.querySelector("#goto");
    stage2.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <Grid container sx={{ backgroundColor: "#F3EEE8" }} rowSpacing={2}>
      <Grid
        item
        xs={6}
        sx={{
          padding: "24px 150px 24px 150px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-evenly",
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <span
            style={{
              fontFamily: "Merriweather",
              fontWeight: 700,
              fontSize: "34px",
              lineHeight: "25px",
              letterSpacing: "2px",
              color: "#A06056",
              marginRight: "20px",
              position: "relative",
              top: "-5px",
            }}
          >
            antic
          </span>

          <Box
            sx={{
              fontFamily: "Varta",
              fontWeight: 400,
              fontSize: "18px",
              lineHeight: "25px",
              color: "#706458",
              height: "fit-content",
            }}
          >
            <span
              style={{
                marginRight: "10px",
              }}
            >
              Products
            </span>
            <span
              style={{
                marginRight: "10px",
              }}
            >
              Rooms
            </span>
            <span
              style={{
                marginRight: "10px",
              }}
            >
              Services
            </span>
            <span>Inspirations</span>
          </Box>
        </Box>

        <Box
          sx={{
            mt: 15,
            display: "flex",
            flexDirection: "column",
            width: "fit-content",
          }}
        >
          <span
            style={{
              fontFamily: "Varta",
              fontWeight: 700,
              fontSize: "14px",
              lineHeight: "20px",
              letterSpacing: "1px",
              color: "#A06056",
              textAlign: "left",
              marginBottom: "50px",
            }}
          >
            HOME DESIGN
          </span>
          <span
            style={{
              fontFamily: "Merriweather",
              fontWeight: 300,
              fontSize: "50px",
              lineHeight: "70px",
              letterSpacing: "-0.4px",
              color: "#A06056",
              marginBottom: "50px",
            }}
          >
            Elegance for <br />
            Interiors & <br />
            Exteriors
          </span>
          <span
            style={{
              fontFamily: "Varta",
              fontWeight: 300,
              fontSize: "22px",
              lineHeight: "30.8px",
              color: "#706458E5",
            }}
          >
            We provide everyone with modern, <br />
            trendy, quality furniture
          </span>
        </Box>
        <Box
          sx={{
            display: "flex",
            color: "#A06056",
            "&:hover": { color: "#534B42" },
          }}
        >
          <IconCircleChevronDown
            onClick={ScrollIntoView}
            size={50}
            stroke={1}
          />
        </Box>
      </Grid>
      <Grid item xs={6}>
        <Box
          sx={{
            width: "50vw",
            minWidth: "50vw",
            maxWidth: "50vw",
            height: "100vh",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundImage:
              "url(https://s3-alpha-sig.figma.com/img/17e1/3420/2e3130d914626b07ec182fc5179ca5d0?Expires=1712534400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ATCxaxML6AkdHjHi3tu39runUIswiwIAiMD78rzA9d3TWwqgmM2T-wRTT64j54fYvC78fNbAS3lpOq7pRQH1ld0kxx95WiC-Z5GplcE9Dz1zQgYxqRxHvBXbTWMP3BUxhDIkmrSw7fPnhvlj-9rnSz6u92H4jRFBZTBznuBMDHJsIMczD~GrxLq-y9hisgP2cZLY7Wsa6aZJhfe5DGvXhplXIV-FbrOTN5LScFm0AkO6gFlZ332bdbSxIVa2l1NVXe47urcEdMEpSpMavE42~gL7ir~xCQTnnsp-NN0rj5-CQBGKFTH87T6l6aXQYFQfrBS60Oy1Gz6Sg9UdSvaiwA__)",
          }}
        >
          <Box
            sx={{
              color: "#fff",
              float: "right",
              position: "relative",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: "50px",
              height: "50px",
              right: "100px",
              top: "100px",
              border: "2px solid #fff",
              // p: 1,
              borderRadius: "50%",
            }}
          >
            <svg
              width="26"
              height="26"
              viewBox="0 0 26 26"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M24.1997 16.1844C24.1796 16.2143 24.1595 16.2444 24.139 16.274C23.8534 16.6918 23.8627 16.7464 23.9341 17.0365L24.9624 20.9531C24.973 20.993 24.9727 21.0349 24.9617 21.0746C24.9507 21.1142 24.9294 21.1503 24.8998 21.179C24.8703 21.2077 24.8336 21.2281 24.7937 21.2379C24.7537 21.2478 24.7118 21.2468 24.6723 21.2352L20.1794 19.9364C19.9537 19.8714 19.6705 19.9422 19.4894 20.0113C19.3083 20.0803 18.6085 20.3363 17.9022 20.5301C17.196 20.7239 15.9082 21.0112 14.9524 21.0112C8.9403 21.0112 4.26522 16.2113 4.26522 10.4429C4.26579 9.72421 4.34361 9.00765 4.49735 8.30558C5.5222 3.5684 9.89667 0 15.1405 0C21.1526 0 26.0146 4.6745 25.996 10.4371C25.9937 12.4477 25.3931 14.4121 24.2707 16.0802C24.2468 16.114 24.2233 16.1491 24.1997 16.1844Z"
                fill="white"
              />
              <path
                d="M14.9305 22.3687C15.3826 22.3609 15.8337 22.3212 16.2803 22.2497C16.3325 22.2416 16.3859 22.2502 16.4329 22.2743C16.4798 22.2985 16.5179 22.337 16.5415 22.3842C16.5652 22.4315 16.5732 22.485 16.5644 22.5371C16.5556 22.5891 16.5305 22.6371 16.4927 22.674C14.6609 24.3964 12.2388 25.3517 9.72438 25.3434C8.41807 25.3434 7.11177 25.0579 5.93081 24.5937C5.81282 24.5423 5.68586 24.5147 5.5572 24.5126C5.42853 24.5104 5.3007 24.5336 5.18103 24.5809L1.23484 25.9876C1.19642 26.0007 1.15525 26.0035 1.11542 25.9957C1.07559 25.9879 1.0385 25.9698 1.00785 25.9432C0.977199 25.9166 0.954057 25.8824 0.940732 25.8441C0.927408 25.8057 0.924366 25.7646 0.931911 25.7247L1.74959 21.5313C1.77454 21.4187 1.69329 21.2498 1.54995 21.0311C0.406508 19.3179 -0.129889 17.271 0.0264272 15.2172C0.182743 13.1634 1.02276 11.2212 2.41231 9.70084C2.44721 9.66264 2.49302 9.63612 2.54352 9.62487C2.59402 9.61363 2.64676 9.61821 2.69457 9.63799C2.74237 9.65777 2.78293 9.69179 2.81071 9.73544C2.8385 9.77908 2.85218 9.83022 2.84988 9.8819L2.84982 9.88362C2.84345 10.0583 2.83711 10.2324 2.83711 10.4135C2.83711 13.0818 3.66233 15.6317 5.17581 17.6379C6.00302 18.7867 7.05028 19.7596 8.25674 20.5001C10.1428 21.7187 12.4681 22.3687 14.9305 22.3687Z"
                fill="white"
              />
            </svg>
          </Box>
        </Box>
      </Grid>
      <Grid item xs={6} id="goto">
        <Box
          sx={{
            padding: "64px 0px 64px 150px",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <span
            style={{
              fontFamily: "Merriweather",
              fontWeight: 400,
              fontSize: "55px",
              lineHeight: "60px",
              letterSpacing: "-0.6px",
              color: "#706458",
            }}
          >
            We stay by your <br />
            side to design <br />
            your projects
          </span>

          <span
            style={{
              fontFamily: "Karla",
              fontWeight: 700,
              fontSize: "17px",
              lineHeight: "25px",
              letterSpacing: "0.3px",
              color: "#A06056",
              marginTop: "20px",
            }}
          >
            Find Out More {">"}
          </span>
        </Box>
      </Grid>
      <Grid
        item
        xs={6}
        sx={{
          backgroundColor: "#F3EEE8",
        }}
      >
        <Box
          sx={{
            padding: "64px 150px 64px 0px",
            alignItems: "center",
            justifyContent: "center",
            height: "100%",
          }}
        >
          <Box
            sx={{
              display: "grid",
              gridTemplateAreas: `"box1 box2" 
          "box3 box4"`,
              gap: "30px",
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gridArea: "box1",
                width: "258px",
              }}
            >
              <span
                style={{
                  fontFamily: "Varta",
                  fontWeight: 600,
                  fontSize: "25px",
                  lineHeight: "30px",
                  letterSpacing: "-0.2px",
                  color: "#A06056",
                  marginBottom: "10px",
                }}
              >
                Our Advices
              </span>
              <span
                style={{
                  fontFamily: "Varta",
                  fontWeight: 400,
                  fontSize: "18px",
                  lineHeight: "25px",
                  color: "#706458E5",
                }}
              >
                What if you took advantage of this rather special period to
                rethink your interior? You spend more time at home so you might
                as well feel good there.
              </span>
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gridArea: "box2",
                width: "258px",
              }}
            >
              <span
                style={{
                  fontFamily: "Varta",
                  fontWeight: 600,
                  fontSize: "25px",
                  lineHeight: "30px",
                  letterSpacing: "-0.2px",
                  color: "#A06056",
                  marginBottom: "10px",
                }}
              >
                Click and collect
              </span>
              <span
                style={{
                  fontFamily: "Varta",
                  fontWeight: 400,
                  fontSize: "18px",
                  lineHeight: "25px",
                  color: "#706458E5",
                }}
              >
                Adapted and contactless. Free from € 200 of purchases in stores
                offering the service.
              </span>
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gridArea: "box3",
                width: "258px",
              }}
            >
              <span
                style={{
                  fontFamily: "Varta",
                  fontWeight: 600,
                  fontSize: "25px",
                  lineHeight: "30px",
                  letterSpacing: "-0.2px",
                  color: "#A06056",
                  marginBottom: "10px",
                }}
              >
                Conception Service
              </span>
              <span
                style={{
                  fontFamily: "Varta",
                  fontWeight: 400,
                  fontSize: "18px",
                  lineHeight: "25px",
                  color: "#706458E5",
                }}
              >
                Personalized service with an expert advisor for your interior
                and exterior decoration or layout projects.
              </span>
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gridArea: "box4",
                width: "258px",
              }}
            >
              <span
                style={{
                  fontFamily: "Varta",
                  fontWeight: 600,
                  fontSize: "25px",
                  lineHeight: "30px",
                  letterSpacing: "-0.2px",
                  color: "#A06056",
                  marginBottom: "10px",
                }}
              >
                Installation Service
              </span>
              <span
                style={{
                  fontFamily: "Varta",
                  fontWeight: 400,
                  fontSize: "18px",
                  lineHeight: "25px",
                  color: "#706458E5",
                }}
              >
                Our furniture packaged in flat packs are designed for easy
                assembly. But you can call on our partner.
              </span>
            </Box>
          </Box>
        </Box>
      </Grid>
      <Grid
        item
        xs={12}
        sx={{
          padding: "50px 150px",
          backgroundColor: "#fff",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-around",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <span
            style={{
              fontFamily: "Merriweather",
              fontSize: "35px",
              fontWeight: 400,
              lineHeight: "40px",
              letterSpacing: "-0.3px",
              textAlign: "left",
              marginBottom: "10px",
            }}
          >
            Be aware of the latest trends
          </span>
          <span
            style={{
              fontFamily: "Varta",
              fontWeight: 400,
              fontSize: "18px",
              lineHeight: "25px",
              color: "#706458E5",
              marginBottom: "10px",
            }}
          >
            Stay informed of new trends, but also of our various offers.
          </span>
          <span
            style={{
              fontFamily: "Karla",
              fontWeight: 700,
              fontSize: "17px",
              lineHeight: "25px",
              color: "#A06056",
            }}
          >
            Learn more {">"}
          </span>
        </Box>

        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "50px",
            p: 2,
          }}
        >
          <input
            type="text"
            placeholder="email@address.com"
            style={{
              height: "fit-content",
              padding: "12px 15px",
              width: "300px",
              backgroundColor: "#F3EEE84D",
              borderRadius: "1px",
              border: "none",
              fontFamily: "Varta",
              fontWeight: 400,
              fontSize: "18px",
              lineHeight: "25px",
            }}
          />
          <button
            style={{
              borderRadius: "1px",
              backgroundColor: "#534B42",
              padding: "8px 30px 8px 30px",
              border: "none",
              color: "#fff",
              height: "49px",
              width: "140px",
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
      </Grid>
      <Grid item xs={12} sx={{ backgroundColor: "#fff", pb: 2 }}>
        <Carrousel />
      </Grid>

      <Grid
        item
        xs={12}
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "top",
          backgroundColor: "#fff",
          padding: "50px 150px",
        }}
      >
        <span
          style={{
            fontFamily: "Merriweather",
            fontWeight: 300,
            fontSize: "45px",
            lineHeight: "40px",
            flex: 1,
            color: "#534B42",
          }}
        >
          Inspirations
        </span>
        <span
          style={{
            fontFamily: "Varta",
            fontWeight: 400,
            fontSize: "18px",
            lineHeight: "25px",
            flex: 1,
            color: "#706458",
          }}
        >
          Our experts are keen to stay on top of trends in order to offer you
          new inspirations for your interior and exterior every day. Remember
          that to inspire you we have to inspire ourselves and we want to share
          that with you.
        </span>
        <Box sx={{ display: "flex", flex: 1, justifyContent: "flex-end" }}>
          <Box
            sx={{
              color: "#A06056",
              "&:hover": { color: "#534B42" },
              width: "fit-content",
              height: "fit-content",
            }}
          >
            <IconCircleChevronLeft size={50} stroke={1} />
          </Box>

          <Box
            sx={{
              color: "#A06056",
              "&:hover": { color: "#534B42" },
              width: "fit-content",
              height: "fit-content",
            }}
          >
            <IconCircleChevronRight size={50} stroke={1} />
          </Box>
        </Box>
      </Grid>

      <Grid
        item
        xs={12}
        sx={{
          padding: "50px 150px",
          display: "flex",
          justifyContent: "center",
          alignItems: "top",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            flex: 1,
            mt: 2,
          }}
        >
          <span
            style={{
              fontFamily: "Merriweather",
              fontWeight: 700,
              fontSize: "34px",
              lineHeight: "25px",
              letterSpacing: "2px",
              color: "#534B42",
            }}
          >
            antic
          </span>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            flex: 1,
            fontFamily: "Varta",
            fontWeight: 400,
            fontSize: "18px",
            lineHeight: "25px",
            color: "#706458",
            mt: 2,
            "> span": {
              marginBottom: "10px",
            },
          }}
        >
          <span
            style={{
              fontFamily: "Varta",
              fontWeight: 600,
              fontSize: "25px",
              lineHeight: "30px",
              letterSpacing: "-0.2px",
              color: "#534B42",
              marginBottom: "20px",
            }}
          >
            Products
          </span>
          <span>Furniture</span>
          <span>Decoration</span>
          <span>Storage</span>
          <span>Baby and child</span>
          <span>Connected home</span>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            flex: 1,
            fontFamily: "Varta",
            fontWeight: 400,
            fontSize: "18px",
            lineHeight: "25px",
            color: "#706458",
            mt: 2,
            "> span": {
              marginBottom: "10px",
            },
          }}
        >
          <span
            style={{
              fontFamily: "Varta",
              fontWeight: 600,
              fontSize: "25px",
              lineHeight: "30px",
              letterSpacing: "-0.2px",
              color: "#534B42",
              marginBottom: "20px",
            }}
          >
            Rooms
          </span>
          <span>Living Room</span>
          <span>Dining Room</span>
          <span>Cooked</span>
          <span>Bedroom</span>
          <span>Bathroom</span>
          <span>Office</span>
          <span>Laundry</span>
          <span>Garage</span>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            flex: 1,
            fontFamily: "Varta",
            fontWeight: 400,
            fontSize: "18px",
            lineHeight: "25px",
            color: "#706458",
            mt: 2,
            "> span": {
              marginBottom: "10px",
            },
          }}
        >
          <span
            style={{
              fontFamily: "Varta",
              fontWeight: 600,
              fontSize: "25px",
              lineHeight: "30px",
              letterSpacing: "-0.2px",
              color: "#534B42",
              marginBottom: "20px",
            }}
          >
            Services
          </span>
          <span>Click and collect</span>
          <span>Conception</span>
          <span>Installation</span>
          <span>Advices</span>
          <span>Gift card</span>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            flex: 1,
            fontFamily: "Varta",
            fontWeight: 400,
            fontSize: "18px",
            lineHeight: "25px",
            color: "#706458",
            mt: 2,
            "> span": {
              marginBottom: "10px",
            },
          }}
        >
          <span
            style={{
              fontFamily: "Varta",
              fontWeight: 600,
              fontSize: "25px",
              lineHeight: "30px",
              letterSpacing: "-0.2px",
              color: "#534B42",
              marginBottom: "20px",
            }}
          >
            About
          </span>
          <span>Our story</span>
          <span>Our stores</span>
          <span>Our partners</span>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            flex: 1,
            fontFamily: "Varta",
            fontWeight: 400,
            fontSize: "16px",
            lineHeight: "25px",
            color: "#706458",
            mt: 2,
            "> span": {
              marginBottom: "10px",
            },
          }}
        >
          <span
            style={{
              fontFamily: "Varta",
              fontWeight: 600,
              fontSize: "25px",
              lineHeight: "30px",
              letterSpacing: "-0.2px",
              color: "#534B42",
              marginBottom: "20px",
            }}
          >
            We respect our planet
          </span>
          <img
            style={{ marginBottom: "20px" }}
            width="235px"
            height="160px"
            src="https://s3-alpha-sig.figma.com/img/cc3e/e34f/505a32d6d777c66cfe3862b428ae2b81?Expires=1712534400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=aW1v3clAiYA3x7F~Bd8YpjATxghcq2elJRhQR4~RyLPozgymqapMN~F7imgWbpqRLL8608EV8bGpBXskMRxS8LWV4xS8h66JLTq~~QLMdz1Hdxm2hsXomsyd69jp7ssKbdluK~ZEj85nDS1VOewIlZyJTf5YhXpTa2cSPvJEUmWO3wa4ho5q3-3fSUgPL3zLjDN7HNGzNDss4dPrPfI6c3BhNsJ639SoY3dSgzugMkREK6mWlKb5IADYlcYkiOjtUgghgF2RlZ2BixkgpX~o253p4-tYy8epcqHc1Lt6bkBXta76qefDGHlJXSS03VtSYzlzbUPq8LroKRINR4kV7g__"
            alt="Not found"
          />
          <span>
            We’re taking positive steps to reduce our impact on the planet. For
            us, that means retailing responsibly.
          </span>
          <span
            style={{
              fontFamily: "Karla",
              fontWeight: 700,
              fontSize: "17px",
              lineHeight: "25px",
              letterSpacing: "0.3px",
              color: "#A06056",
            }}
          >
            Learn more {">"}
          </span>
        </Box>
      </Grid>
      <Grid
        item
        xs={12}
        sx={{
          display: "flex",
          padding: "24px 150px",
          justifyContent: "center",
        }}
      >
        <svg
          width="1140"
          height="32"
          viewBox="0 0 1140 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M498.8 0H473.2C471.433 0 470 1.43269 470 3.2V28.8C470 30.5673 471.433 32 473.2 32H486V19.9529H481.2V15.4353H486V13.0093C486 8.41638 488.383 6.4 492.28 6.4C494.109 6.4 495.094 6.53027 495.572 6.59356L495.6 6.59727V10.9176H492.942C491.289 10.9176 490.8 11.773 490.8 13.5048V15.4353H495.559L494.901 19.9529H490.8V32H498.8C500.567 32 502 30.5673 502 28.8V3.2C502 1.43269 500.567 0 498.8 0Z"
            fill="#706458"
            fillOpacity="0.9"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M554.8 0H529.2C527.433 0 526 1.43269 526 3.2V28.8C526 30.5673 527.433 32 529.2 32H554.8C556.567 32 558 30.5673 558 28.8V3.2C558 1.43269 556.567 0 554.8 0ZM550.56 9.98298C551.49 9.87553 552.376 9.63729 553.2 9.28328C552.584 10.1737 551.804 10.9559 550.906 11.5831C550.914 11.7739 550.919 11.9655 550.919 12.1579C550.919 18.0296 546.298 24.8 537.845 24.8C535.249 24.8 532.834 24.0645 530.8 22.8042C531.16 22.8458 531.526 22.8667 531.897 22.8667C534.05 22.8667 536.032 22.1561 537.604 20.9641C535.593 20.9283 533.896 19.643 533.311 17.878C533.591 17.9288 533.88 17.9571 534.175 17.9571C534.595 17.9571 535.002 17.9029 535.387 17.8013C533.284 17.394 531.7 15.5981 531.7 13.4448V13.389C532.32 13.7214 533.029 13.9213 533.782 13.9446C532.549 13.1483 531.738 11.788 531.738 10.247C531.738 9.43155 531.965 8.66854 532.359 8.01215C534.627 10.701 538.013 12.4703 541.832 12.6552C541.754 12.3311 541.713 11.9913 541.713 11.6431C541.713 9.18999 543.77 7.2 546.308 7.2C547.63 7.2 548.824 7.73977 549.662 8.60357C550.709 8.40365 551.693 8.03381 552.581 7.52486C552.238 8.56275 551.51 9.43322 550.56 9.98298Z"
            fill="#706458"
            fillOpacity="0.9"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M610.8 0H585.2C583.433 0 582 1.43269 582 3.2V28.8C582 30.5673 583.433 32 585.2 32H610.8C612.567 32 614 30.5673 614 28.8V3.2C614 1.43269 612.567 0 610.8 0ZM588.4 7.30246C588.4 8.68399 589.521 9.80638 590.906 9.80638C592.288 9.80638 593.411 8.68399 593.411 7.30246C593.411 5.9224 592.288 4.8 590.906 4.8C589.522 4.8 588.4 5.92094 588.4 7.30246ZM588.801 25.6H593.099V11.7819H588.801V25.6ZM609.2 25.6H604.904V18.8802C604.904 17.2774 604.875 15.216 602.671 15.216C600.434 15.216 600.09 16.9615 600.09 18.7637V25.6H595.795V11.7819H599.918V13.67H599.977C600.551 12.584 601.952 11.4383 604.043 11.4383C608.396 11.4383 609.2 14.3003 609.2 18.0213V25.6Z"
            fill="#706458"
            fillOpacity="0.9"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M647.6 0H660.4C665.702 0 670 4.29807 670 9.6V22.4C670 27.7019 665.702 32 660.4 32H647.6C642.298 32 638 27.7019 638 22.4V9.6C638 4.29807 642.298 0 647.6 0ZM663.6 4.8C664.4 4.8 665.2 5.6 665.2 6.4C665.2 7.2 664.4 8 663.6 8C662.8 8 662 7.2 662 6.4C662 5.6 662.8 4.8 663.6 4.8ZM662 16C662 11.588 658.412 8 654 8C649.588 8 646 11.588 646 16C646 20.412 649.588 24 654 24C658.412 24 662 20.412 662 16ZM654 11.2C651.349 11.2 649.2 13.349 649.2 16C649.2 18.651 651.349 20.8 654 20.8C656.651 20.8 658.8 18.651 658.8 16C658.8 13.349 656.651 11.2 654 11.2Z"
            fill="#706458"
            fillOpacity="0.9"
          />
        </svg>
      </Grid>
      <Grid
        item
        xs={12}
        sx={{
          display: "flex",
          justifyContent: "space-between",
          padding: "24px 150px",
          fontFamily: "Varta",
          fontWeight: 400,
          fontSize: "18px",
          lineHeight: "25px",
          color: "#706458B2",
        }}
      >
        <Box>
          <span>© 2021 Agence Dnd</span>
        </Box>
        <Box
          sx={{
            width: "fit-content",
            display: "flex",
            justifyContent: "space-evenly",
          }}
        >
          <span style={{ margin: "0px 10px" }}>Privacy policy</span>
          <span style={{ margin: "0px 10px" }}>Terms of service</span>
          <span style={{ margin: "0px 10px" }}>Language</span>
        </Box>
      </Grid>
    </Grid>
  );
};

export default DesktopLanding;
