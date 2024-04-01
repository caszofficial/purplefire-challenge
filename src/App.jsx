import { useMediaQuery, useTheme } from "@mui/material";
import "./App.css";
import Mobile from "./assets/Pages/Landing/Mobile";
import Desktop from "./assets/Pages/Landing/Desktop";

function App() {
  const theme = useTheme();
  const mobile = useMediaQuery(theme.breakpoints.between("xs", "md"));
  const desktop = useMediaQuery(theme.breakpoints.up("md"));
  return (
    <div>
      {mobile && <Mobile />}
      {desktop && <Desktop />}
    </div>
  );
}

export default App;
