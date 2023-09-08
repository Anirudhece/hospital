import React from "react";
import Stepper from "./components/Stepper";
import { Box } from "@mui/material";
function App() {
  return (
    <>
      <Box sx={{ display: "flex", justifyContent: "center" , mt:20}}>
        <Box sx={{ width: "85%" }}>
          <Stepper />
        </Box>
      </Box>
    </>
  );
}

export default App;
