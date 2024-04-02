import { useMediaQuery, useTheme } from "@mui/material";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import MobileLanding from "./assets/Pages/Landing/MobileLanding";
import DesktopLanding from "./assets/Pages/Landing/DesktopLanding";
import MobilePDP from "./assets/Pages/PDP/MobilePDP";
import DesktopPDP from "./assets/Pages/PDP/Desktop/DesktopPDP";

function App() {
  const theme = useTheme();
  const mobile = useMediaQuery(theme.breakpoints.between("xs", "md"));
  const desktop = useMediaQuery(theme.breakpoints.up("md"));
  return (
    <>
      {mobile && (
        <Routes>
          <Route path="/" element={<MobileLanding />} />
          <Route path="/pdp" element={<MobilePDP />} />
        </Routes>
      )}
      {desktop && (
        <Routes>
          <Route path="/" element={<DesktopLanding />} />
          <Route path="/pdp" element={<DesktopPDP />} />
        </Routes>
      )}
    </>
  );
}

export default App;
