import React from "react";
import { Box, Button, Stack, Typography } from "@mui/material";
import "./Hero.css";
import burger from "../../images/burger.jpg";

const Hero = () => {
  return (
    <div>
      <div className="hero-container">
        <div className="hero1">
          <Typography
            color="white"
            sx={{
              bgcolor: "red",
              maxWidth: "max-content",
              p: "5px",
              borderRadius: "5px",
            }}
          >
            24 HOURS HOME DELEVERY
          </Typography>
          <Typography variant="h4" fontWeight={"bold"}>
            THE DELIGHT JUMBO BURGER
          </Typography>
          <Stack variant="body-1" spacing={1}>
            <Typography>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            </Typography>
            <Typography>
              Explicabo corrupti error numquam velit vel sit nihil cumque
            </Typography>
            <Typography>
              Quisquam nemo atque esse cum possimus voluptatum
            </Typography>
          </Stack>
          <Button variant="contained" size="small" sx={{ bgcolor: "#ffd600" }} >
            <img
              src="https://cdn-icons-png.flaticon.com/512/2430/2430422.png"
              alt="bag"
              width={25}
            />
            Order Now
          </Button>
        </div>
        <div className="hero2"></div>

        <div className="hero-2">
          <Box boxShadow={15} borderRadius="30px">
            <img src={burger} alt="burger" />
          </Box>
        </div>
      </div>
    </div>
  );
};

export default Hero;
