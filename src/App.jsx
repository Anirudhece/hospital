import React from "react";
import Stepper from "./components/Stepper";
import { Box } from "@mui/material";
import Hero from "./components/Hero";
function App() {
  return (
    <>
      <Box sx={{ display: "flex", justifyContent: "center",fontFamily: '"Nunito Sans", sans-serif', mt:25}}>
        <Box sx={{ width: "85%" }}>
          <Hero />
          {/* <Stepper /> */}
        </Box>
      </Box>
    </>
  );
}

export default App;
