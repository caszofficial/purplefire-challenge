import { TabContext, TabList, TabPanel } from "@mui/lab";
import { Box, Tab, Typography } from "@mui/material";
import React, { useState } from "react";

const ProductDetailsTabs = () => {
  const [value, setValue] = useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Box sx={{ p: 2 }}>
      <TabContext value={value}>
        <TabList
          centered
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
              fontSize: "22px",
              lineHeight: "26.6px",
              fontWeight: 500,
            }}
          />
          <Tab
            label="Specification"
            value="2"
            sx={{
              fontFamily: "Inter",
              fontSize: "22px",
              lineHeight: "26.6px",
              fontWeight: 500,
            }}
          />
          <Tab
            label="Reviews"
            value="3"
            sx={{
              fontFamily: "Inter",
              fontSize: "22px",
              lineHeight: "26.6px",
              fontWeight: 500,
            }}
          />
        </TabList>
        <TabPanel value="1" sx={{ p: "20px 100px" }}>
          <Typography
            sx={{
              fontFamily: "Inter",
              fontWeight: 300,
              fontSize: "18px",
              lineHeight: "21.7px",
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
              fontSize: "18px",
              lineHeight: "21.7px",
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
              fontSize: "18px",
              lineHeight: "21.7px",
            }}
          >
            **65C2 Stand model is at a minimum 39% lighter than the C1 series.
            <span style={{ color: "#E73C17" }}>More...</span>
          </Typography>
        </TabPanel>
        <TabPanel value="2" sx={{ p: "20px 100px" }}>
          <Box
            sx={{
              fontFamily: "Inter",
              fontWeight: 300,
              fontSize: "18px",
              lineHeight: "21.7px",
            }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
            iaculis, metus eu rhoncus efficitur, turpis sem tempus massa, id
            consectetur nunc purus in lectus. Donec non velit a odio volutpat
            volutpat in in nisi. Maecenas aliquet turpis lacus, id pharetra elit
            sagittis vel. Ut consectetur nisi quis ullamcorper pellentesque.
            Integer efficitur interdum nunc, ut elementum nulla. Phasellus
            feugiat nulla et rhoncus porttitor. Nullam at lectus sed turpis
            porttitor viverra accumsan hendrerit lorem. Praesent tincidunt nisi
            at nunc suscipit malesuada.
          </Box>
        </TabPanel>
        <TabPanel value="3" sx={{ p: "20px 100px" }}>
          <Box
            sx={{
              fontFamily: "Inter",
              fontWeight: 300,
              fontSize: "18px",
              lineHeight: "21.7px",
            }}
          >
            Suspendisse potenti. Sed dapibus bibendum orci, eget semper diam
            tincidunt eget. Nulla a mi non nulla fermentum molestie. Aenean
            magna massa, tempus quis risus nec, sollicitudin consectetur mi.
            Donec dictum nulla sed nulla semper elementum. Nulla dictum ultrices
            risus, id ornare arcu rutrum vel. Curabitur vestibulum id nisi at
            pellentesque. Aenean a lacinia tellus. Aliquam iaculis odio sit amet
            velit laoreet, non feugiat tellus elementum.
          </Box>
        </TabPanel>
      </TabContext>
    </Box>
  );
};

export default ProductDetailsTabs;
