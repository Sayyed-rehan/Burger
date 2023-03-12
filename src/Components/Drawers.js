import React, { useState } from "react";
import { Box, Drawer, IconButton, List, Typography } from "@mui/material";
import { Menu } from "@mui/icons-material";

const Drawers = () => {
  const [isDrawerOpen, setisDrawerOpen] = useState(false);
  return (
    <>
      <IconButton
        size="large"
        edge="start"
        color="black"
        onClick={() => setisDrawerOpen(true)}
      >
        <Menu />
      </IconButton>
      <Drawer
        anchor="left"
        open={isDrawerOpen}
        onClose={() => setisDrawerOpen(false)}
      >
        <Box p={2} widht="250px" textAlign={"cneter"} role="presentation">
          <Typography variant="h6">Side panel</Typography>
        </Box>
      </Drawer>
    </>
  );
};

export default Drawers;
