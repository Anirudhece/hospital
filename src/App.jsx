import React from "react";
import Stepper from "./components/Stepper";
import { Box } from "@mui/material";
import Hero from "./components/Hero";
import Navigation from "./components/Navigation";
import { ChakraProvider } from "@chakra-ui/react";
import Stats from "./components/Stats";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Heading from "./components/Heading";
function App() {
  return (
    <>
      <Navigation />
      <Box
        sx={{
          fontFamily: '"Nunito Sans", sans-serif',
          mt:5,
        }}
      >
        <Box sx={{ width: "85%",ml:'auto',mr:'auto' }}>
          <Hero />
          <Stepper />
        </Box>
        <ChakraProvider>
          <Stats />
          <Contact />
          <Footer />
        </ChakraProvider>
      </Box>
    </>
  );
}

export default App;
