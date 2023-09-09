import React from "react";
import { Box, Typography } from "@mui/material";
function Hero() {
  const gradientColor = (firstColor, secondColor) => {
    const gradientText = {
      backgroundImage: `linear-gradient(90deg, ${firstColor}, ${secondColor})`,
      WebkitBackgroundClip: "text",
      color: "transparent",
    };
    return gradientText;
  };

  return (
    <>
      <Box mb={15}>
        <Typography
          variant="h3"
          mb={5}
          sx={{ fontWeight: "800", textAlign: "center" }}
        >
          Transforming{" "}
          <span style={gradientColor("#7928ca", " #ff0080")}>HEALTHCARE</span>{" "}
          through{" "}
          <span style={gradientColor("#00dfd8", " #007cf0")}>INNOVATION</span> &{" "}
          <span style={gradientColor("#ff4d4d", " #f9cb28")}>TECHNOLOGY</span>{" "}
        </Typography>
        <Typography variant="h6" sx={{ textAlign: "center", color: "#383838" }}>
          Experience a new era in healthcare, where cutting-edge technology and
          the power of{" "}
          <span style={{ color: "#3f51b5", fontWeight: "600",fontStyle: 'italic' }}>
            AI REVOLUTIONIZE
          </span>{" "}
          how doctors are{" "}
          <span style={{ color: "#64dd17", fontWeight: "600",fontStyle: 'italic' }}>
            AVAILABLE AND APPOINTMENT
          </span>{" "}
          are scheduled.
        </Typography>
      </Box>
    </>
  );
}

export default Hero;
