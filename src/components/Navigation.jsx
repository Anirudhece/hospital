import React from "react";
import { Box, Typography, Badge, IconButton, Tooltip } from "@mui/material";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import CallOutlinedIcon from "@mui/icons-material/CallOutlined";
function Navigation() {
  const TypeRoute = (text) => {
    return (
      <Typography
        variant="h6"
        sx={{
          fontFamily:
            '-apple-system, BlinkMacSystemFont, "Segoe UI","Noto Sans TC","Microsoft JhengHei", "Meiryo UI", Helvetica, Arial, sans-serif',
          color: "#696969",
          fontWeight: "bold",
          cursor: "pointer",
          "&:hover": {
            color: "black",
            borderBottom: "3px solid black",
            transition: "border-bottom 0.2s",
          },
          borderBottom: "3px solid transparent",
          transition: "border-bottom 0.3s",
        }}
        mt={1}
        mr={2}
        ml={2}
        mb={1}
        pb={2}
      >
        {text}
      </Typography>
    );
  };
  return (
    <>
      <Box sx={{ display: "flex" }}>
        <Box
          ml={4}
          mr={4}
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          <Box className="left" sx={{ display: "flex" }}>
            <Box className="image" mr={3}>
              <img
                style={{ width: "40px" }}
                src="https://www.dailyrounds.org/blog/wp-content/uploads/2015/05/caduceus.jpg"
                alt="govt of HP"
              />
            </Box>
            {TypeRoute("AIM")}
            {TypeRoute("HOSPITALS")}
            {TypeRoute("TECHNOLOGY")}
            {TypeRoute("ABOUT US")}
            {TypeRoute("CONTACT")}
          </Box>
          <Box className="right" sx={{ display: "flex" }}>
            <Box mr={3}>
              <IconButton aria-label="login">
                <Badge badgeContent={69} color="error">
                  <Tooltip title="login/signup">
                    <AccountCircleOutlinedIcon
                      color="primary"
                      fontSize="large"
                    />
                  </Tooltip>
                </Badge>
              </IconButton>
            </Box>
            <Box>
              <IconButton aria-label="contact">
                <Tooltip title="contact us">
                  <CallOutlinedIcon color="error" fontSize="large" />
                </Tooltip>
              </IconButton>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
}

export default Navigation;
