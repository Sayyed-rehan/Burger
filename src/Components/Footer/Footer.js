import React from "react";
import { Box, Divider, Typography } from "@mui/material";

const Footer = () => {
  return (
    <div>
      <Divider />
      <Box sx={{display:"flex", justifyContent:"center", pt:"20px", pb:"20px"
      , bgcolor:"#fffde7"}}>
        <Typography variant="body-1" fontWeight={"bolder"}>
          @Rehan2023-All Rights Reserved
        </Typography>
      </Box>
    </div>
  );
};

export default Footer;
