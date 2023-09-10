import React from "react";
import Stepper from "./components/Stepper";
import { Box } from "@mui/material";
import Hero from "./components/Hero";
import Navigation from "./components/Navigation";
import { ChakraProvider } from "@chakra-ui/react";
import Stats from './components/Stats'
import Contact from "./components/Contact";

function App() {
  return (
    <>
      <Navigation />
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          fontFamily: '"Nunito Sans", sans-serif',
          mt: 25,
        }}
      >
        <Box sx={{ }}>
          {/* <Hero />
          <Stepper /> */}
          <ChakraProvider>
            {/* <Contact /> */}
            <Stats/>
          </ChakraProvider>
        </Box>
      </Box>
    </>
  );
}

export default App;
