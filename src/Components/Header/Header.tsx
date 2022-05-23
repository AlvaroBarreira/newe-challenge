import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

const Header = () => {
  return (
    <Box
      sx={{
        flexGrow: 1,
      }}
    >
      <AppBar
        position="static"
        sx={{
          backgroundColor: "rgb(255,255,255) !important",
          background:
            "linear-gradient(90deg, rgba(255,255,255,1) 33%, rgba(215,194,251,1) 49%, rgba(215,194,251,1) 50%, rgba(215,194,251,1) 64%) !important",
        }}
      >
        <Toolbar>
          <Typography component="div" sx={{flexGrow: 1, color: "black"}} variant="h6">
            PokeApi
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
