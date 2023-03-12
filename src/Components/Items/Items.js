import React from "react";
import { Divider, Typography } from "@mui/material";
import "./Items.css";

const Items = () => {
  return (
    <div>
      <div className="items-container">
        <div className="items1">
          <Typography variant="h6" color="orange" fontWeight={"bold"}>
            Items On Discount
          </Typography>
          <Typography variant="h4">TODAY'S SPECIAL ITEMS</Typography>
          <img src="https://cdn-icons-png.flaticon.com/512/1046/1046857.png" alt='dish'/>
        </div>
        <Divider variant="fullWidth"/>
      </div>
    </div>
  );
};

export default Items;
