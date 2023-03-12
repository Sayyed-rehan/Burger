import React from "react";
import { AppBar, Box, Button, Toolbar, Typography } from "@mui/material";
import "./Navbar.css";

const Navbar = () => {
  const hanldeCliclk = () => {
    alert("sorry");
  };
  return (
    <AppBar position="fixed">
      <Toolbar className="nav-toolbar">
        <div className="nav-1">
          <img
            src="https://cdn-icons-png.flaticon.com/512/1159/1159173.png"
            alt="burger"
          />
        </div>

        <div className="nav-2" >
          <Typography>Home</Typography>
          <Typography >Menu</Typography>
          <Typography >Shop</Typography>
          <Typography >Testimonial</Typography>
          <Typography >Blog</Typography>
          <Button variant="contained" size="small">
            Book Table
          </Button>
        </div>

        <div className="nav-3">
          <img
            src="https://cdn-icons-png.flaticon.com/512/582/582796.png"
            alt="bags"
            onClick={hanldeCliclk}
  
          />
          <img
            src="https://cdn-icons-png.flaticon.com/512/751/751463.png"
            alt="search"
          />
        </div>
      

      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
